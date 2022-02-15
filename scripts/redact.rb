#!/usr/bin/env ruby

=begin
 brew install ruby
 export PATH="/usr/local/opt/ruby/bin:$PATH"
 gem install faker
=end

require 'csv'
require 'faker'

Faker::Config.locale = 'en-GB'

data = CSV.read("vonage.csv")

numbers = {}

for row in data do
#  numbers[row[0]].nil? ? numbers[row[0]] = 1 : numbers[row[0]] += 1
   numbers[row[0]] = Faker::PhoneNumber.phone_number
end

for number in numbers.keys do
  `sed -i '' 's/#{number}/#{numbers[number]}/g' vonage-head.csv`
end


data_redacted = CSV.read("vonage.csv")

for row in data_redacted do
 puts "#{row[0]},#{row[1]},#{row[2]},#{row[13]},#{row[15]}"
end
