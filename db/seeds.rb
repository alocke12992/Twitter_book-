10.times do
  Post.create(
    username: Faker::StarWars.character, 
    img: Faker::Avatar.image,
    post: Faker::StarWars.quote
  )
end