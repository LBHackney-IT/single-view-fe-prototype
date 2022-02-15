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

# read in vonage data
data = CSV.read("vonage-redacted.csv")

calls = {}

for row in data do
  calls[row[0]].nil? ? calls[row[0]] = [ row ] : calls[row[0]].push(row)
end

for number in calls.keys do
  puts number
  puts calls[number].size

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
        "home_country_2l": "CH"
      }
    }
  }

  puts data.to_json
end
