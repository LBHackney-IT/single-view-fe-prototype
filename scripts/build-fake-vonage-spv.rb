#!/usr/bin/env ruby

=begin
 brew install ruby
 export PATH="/usr/local/opt/ruby/bin:$PATH"
 gem install faker
 ruby build-fake-vonage-spv.rb 
=end

require 'faker'
require 'securerandom'
require 'json'
require 'csv'

file = ARGV[0] || "vonage-redacted.csv"

puts "Reading... #{file}"

# read in vonage data
data = CSV.read(file)

calls = {}
output = {}

for row in data do
  calls[row[0]].nil? ? calls[row[0]] = [ row ] : calls[row[0]].push(row)
end

for number in calls.keys do
  puts number

  vonage_events = []

  sorted_calls = calls[number].sort_by {|event| event[5]}
  for call in sorted_calls
    call.delete_if {|field| field.nil? }  
    if ['Ringing','Connected','InteractionPlan'].include?(call[3])
      event = {
        :phone_number => number,
        :service_name => call[1],
        :call_direction => call[2],
        :event => call[3],
        :start_time => call[4],
        :duration => call[5]
      }
      vonage_events.push(event)
    end
  end

  telephone_number = number

  # generate random data
  Faker::Config.locale = 'en-GB'

  person_uuid = SecureRandom.uuid
  hex_id = Faker::Alphanumeric.alphanumeric(number: 15)
  email = Faker::Internet.email
  fullname = Faker::Name.name
  created_date = Faker::Date.between(from: '2010-09-01', to: '2020-09-01')
  person_type_owner = "OWNER"
  manufacturer = ["BLAB", "SONY", "TRISATR"].sample
  manufacturer_serial_number = SecureRandom.uuid

  county = Faker::Address.state
  country = "UK"
  town = Faker::Address.city
  address1 = Faker::Address.street_name
  address2 = Faker::Address.street_address
  postcode = Faker::Address.postcode

  data = {
    "#{telephone_number}": {
      "PersonalDetails": {
        "personID": "12356577",
        "title_refcode": "Dr",
        "gender_refcode": "M",
        "first_name": "John",
        "last_name": "Doe",
        "phonetic_first_name": "Jon",
        "phonetic_last_name": "Doe",
        "full_name": "John Doe",
        "nickname": "johnny123",
        "date_of_birth": "31/12/1980",
        "preferred_language_refcode": "en-US",
        "home_country_2l": "CH",
        "Addresses": [
          {
            "address_contact_type_refcode": "Home",
            "address_line_1": "Avenue de Cour",
            "address_line_2": "Bataliere",
            "address_line_3": "",
            "address_line_4": "",
            "address_line_5": "",
            "postal_code": "1007",
            "post_box": "",
            "district": "Lausanne",
            "city": "Lausanne",
            "area": "Vaud",
            "region": "Lausanne",
            "locality": "Cour",
            "country_2l": "CH",
            "latitude": "46.5172",
            "longitude": "6.63",
            "last_updated_date": "2016-12-31T12:00:00.271Z"
          }
        ],
        "Emails": [
          {
            "MainEmail": {
              "email_address": "John.Doe@somedomain.com"
            }
          }
        ],
        "contacts": [
          {
            "contactType": "phone",
            "subType": "correspondenceAddress",
            "value": "800-123-4567",
            "description": "home",
            "addressExtended": {
              "isOverseasAddress": "false",
              "overseasAddress": ""
            }
          }
        ]
      },
      "vonage_events": vonage_events,
      "notes": [
        {
          "title": "Note Title",
          "description": "some notes to attach to an object",
          "targetType": "repair",
          "createdAt": "2021-02-19 15:12:00",
          "attachments": [
            {
              "title": "document 1",
              "description": "document 1 provided for reason X",
              "type?": "Identification",
              "uri": "https://aws.com/document1.pdf",
              "valid-up-to-datetime": "2021-08-19 15:12:00"
            }
          ],
          "categorisation": {
            "category": "Appointments",
            "sub-category": "subcat1",
            "description": "some description"
          },
          "author": {
            "fullname": "Mehdi Kimakhe",
            "email": "mehdi.kimakhe@hackney.gov.uk"
          },
          "tags": "person, update, complaint"
        }
      ]
    }
  }

  output.merge!(data)
end

puts output.to_json
