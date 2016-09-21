Teacher.delete_all
Badge.delete_all

10.times do
  Teacher.create(name: Faker::Name.name)
end



Teacher.all.each do |teacher|
  5.times do
    teacher.badges << Badge.create(
                      phrase: Faker::Company.catch_phrase,
                      votes: 0)
  end
end

