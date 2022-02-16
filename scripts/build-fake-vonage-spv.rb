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

# read in vonage data
data = CSV.read(file)

calls = {}
output = {}

for row in data do
  calls[row[0]].nil? ? calls[row[0]] = [ row ] : calls[row[0]].push(row)
end

for number in calls.keys do

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

  next if vonage_events.empty?

  telephone_number = number

  # generate random data
  Faker::Config.locale = 'en-GB'

  person_uuid = SecureRandom.uuid
  hex_id = Faker::Alphanumeric.alphanumeric(number: 15)
  email = Faker::Internet.email
  fullname = Faker::Name.name
  author = Faker::Name.name
  created_date = Faker::Date.between(from: '2010-09-01', to: '2020-09-01')
  gender = ["M", "F"].sample
  title = ["Mr", "Mrs", "Ms", "Dr"].sample
  dob = Faker::Date.birthday(min_age: 18, max_age: 65)

  county = Faker::Address.state
  country = "UK"
  town = Faker::Address.city
  address1 = Faker::Address.street_name
  address2 = Faker::Address.street_address
  postcode = Faker::Address.postcode

  tags = ["complaint", "update", "repairs", "water", "plumbing", "door", "lights", "covid"].sample(3)
  note = Faker::Hipster.sentences.sample
  note_title = Faker::Book.title

  date = Faker::Time.backward(days: 14, period: :evening) 

  category = ["Repairs","Covid","Housing","Tax","General Query"].sample

  data = {
    "#{telephone_number}": {
      "PersonalDetails": {
        "personID": person_uuid,
        "title_refcode": title,
        "gender_refcode": gender,
        "first_name": fullname.split(/\s+/).first,
        "last_name": fullname.split(/\s+/).last,
        "phonetic_first_name": fullname.split(/\s+/).first,
        "phonetic_last_name": fullname.split(/\s+/).last,
        "full_name": fullname,
        "nickname": fullname.split(/\s+/).first,
        "date_of_birth": dob,
        "preferred_language_refcode": "en-US",
        "home_country_2l": "UK",
        "Addresses": [
          {
            "address_contact_type_refcode": "Home",
            "address_line_1": address1,
            "address_line_2": address2,
            "address_line_3": "",
            "address_line_4": "",
            "address_line_5": "",
            "postal_code": postcode,
            "post_box": "",
            "district": county,
            "city": town,
            "area": county,
            "region": county,
            "locality": "Cour",
            "country_2l": "UK",
            "last_updated_date": date
          }
        ],
        "Emails": [
          {
            "MainEmail": {
              "email_address": email
            }
          }
        ],
        "contacts": [
          {
            "contactType": "phone",
            "subType": "correspondenceAddress",
            "value": telephone_number,
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
          "title": note_title,
          "description": note,
          "targetType": "repair",
          "createdAt": date,
          "attachments": [
            {
              "title": "Evidence (photo)",
              "description": "document 1 provided for reason evidence of identity",
              "type?": "Identification",
              "uri": "https://aws.com/document1.pdf",
              "valid-up-to-datetime": "2023-08-19 15:12:00"
            }
          ],
          "categorisation": {
            "category": "Repairs",
            "sub-category": "Kitchen",
            "description": "plumbing"
          },
          "author": {
            "fullname": author,
            "email": "#{author}@hackney.gov.uk"
          },
          "tags": tags
        }
      ]
    }
  }

  output.merge!(data)
end

puts output.to_json
