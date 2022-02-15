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
  numbers[row[0]].nil? ? numbers[row[0]] = 1 : numbers[row[0]] += 1
end

for number in numbers.keys do
  puts numbers[number]
end
