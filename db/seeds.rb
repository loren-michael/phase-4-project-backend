puts "Resetting Tables"

Rental.destroy_all
Movie.destroy_all
Store.destroy_all
User.destroy_all


puts "Creating Users"

u1 = User.create(username: "user1", password: "password")
u2 = User.create(username: "user2", password: "password")
u3 = User.create(username: "user3", password: "password")
u4 = User.create(username: "user4", password: "password")
u5 = User.create(username: "user5", password: "password")


puts "Locating Stores"

s1 = Store.create(address: "2425 W Cermak Rd")
s2 = Store.create(address: "3145 S Ashland")
s3 = Store.create(address: "1015 W Madison St")
s4 = Store.create(address: "1303 N Milwaukee Ave")


puts "Releasing Movies"

m1 = Movie.create(store_id: s1.id, title: "Jumanji", poster_url: "https://www.themoviedb.org/t/p/original/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg", mpaa: "PG", year: 1995, runtime: 104, synopsis: 'Judy and Peter Shepherd are two kids that found a board game called "Jumanji". With each turn, the two of them are given a "game clue" and then sucked into a dangerous jungle until they solve their clue. There they meet Alan Parrish, who was trapped in the Jumanji jungle because he had never seen his clue.', availability: false)
m2 = Movie.create(store_id: s1.id, title: "Empire Records", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/x3OhxQmmIdWFfLIe0vsweaZZTTy.jpg", mpaa: "PG-13", year: 1995, runtime: 100, synopsis: "The employees of an independent music store learn about each other as they try anything to stop the store being absorbed by a large chain.", availability: false)
m3 = Movie.create(store_id: s1.id, title: "Space Jam", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7Jd4M4vc6IvzL2sLDKkjWswF5rO.jpg", mpaa: "PG", year: 1996, runtime: 88, synopsis: "Jokes fly as the Tune Squad takes on the Nerdlucks in a hardcourt game to decide if the Looney Tunes remain here... or become attractions at a far-off galactic off-ramp called Moron Mountain. The Nerdlucks have a monstrous secret weapon: they've stolen the skills of top NBA stars like Charles Barkley and Patrick Ewing and become Monstars. But that's not all, folks. The Tune Squad’s secret weapon just happens to be the finest player in this or any other universe. He's outta this world. So's the fun.", availability: true)
m4 = Movie.create(store_id: s1.id, title: "Tommy Boy", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cUvdzCbhLyYUAwbIkBjT3tC28cK.jpg", mpaa: "PG-13", year: 1995, runtime: 98, synopsis: "To save the family business, two ne’er-do-well traveling salesmen hit the road with disastrously funny consequences.", availability: true)
m5 = Movie.create(store_id: s1.id, title: "10 Things I Hate About You", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujERk3aKABXU3NDXOAxEQYTHe9A.jpg", mpaa: "PG-13", year: 1999, runtime: 97, synopsis: "On the first day at his new school, Cameron instantly falls for Bianca, the gorgeous girl of his dreams. The only problem is that Bianca is forbidden to date until her ill-tempered, completely un-dateable older sister Kat goes out, too. In an attempt to solve his problem, Cameron singles out the only guy who could possibly be a match for Kat: a mysterious bad boy with a nasty reputation of his own.", availability: true)
m6 = Movie.create(store_id: s2.id, title: "The Fifth Element", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg", mpaa: "PG-13", year: 1997, runtime: 126, synopsis: "In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.", availability: false)
m7 = Movie.create(store_id: s2.id, title: "The Fugitive", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b3rEtLKyOnF89mcK75GXDXdmOEf.jpg", mpaa: "PG-13", year: 1993, runtime: 131, synopsis: "Wrongfully convicted of murdering his wife and sentenced to death, Richard Kimble escapes from the law in an attempt to find the real killer and clear his name.", availability: false)
m8 = Movie.create(store_id: s2.id, title: "Edward Scissorhands", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1RFIbuW9Z3eN9Oxw2KaQG5DfLmD.jpg", mpaa: "PG-13", year: 1990, runtime: 105, synopsis: "A small suburban town receives a visit from a castaway unfinished science experiment named Edward.", availability: false)
m9 = Movie.create(store_id: s2.id, title: "Office Space", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fiB7DY9mATGFOCTd4cgK6k2Wzr9.jpg", mpaa: "R", year: 1999, runtime: 90, synopsis: "A depressed white-collar worker tries hypnotherapy, only to find himself in a perpetual state of devil-may-care bliss that prompts him to start living by his own rules, and hatch a hapless attempt to embezzle money from his soul-killing employers.", availability: true)
m10 = Movie.create(store_id: s2.id, title: "The Silence of the Lambs", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg", mpaa: "R", year: 1991, runtime: 119, synopsis: "Clarice Starling is a top student at the FBI's training academy. Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.", availability: true)
m11 = Movie.create(store_id: s3.id, title: "Clueless", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8AwVTcgpTnmeOs4TdTWqcFDXEsA.jpg", mpaa: "PG-13", year: 1995, runtime: 97, synopsis: "Shallow, rich and socially successful Cher is at the top of her Beverly Hills high school's pecking scale. Seeing herself as a matchmaker, Cher first coaxes two teachers into dating each other. Emboldened by her success, she decides to give hopelessly klutzy new student Tai a makeover. When Tai becomes more popular than she is, Cher realizes that her disapproving ex-stepbrother was right about how misguided she was -- and falls for him.", availability: true)
m12 = Movie.create(store_id: s3.id, title: "Jurassic Park", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg", mpaa: "PG-13", year: 1993, runtime: 127, synopsis: "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.", availability: false)
m13 = Movie.create(store_id: s3.id, title: "Pulp Fiction", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg", mpaa: "R", year: 1994, runtime: 154, synopsis: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.", availability: true)
m14 = Movie.create(store_id: s3.id, title: "Pretty Woman", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hVHUfT801LQATGd26VPzhorIYza.jpg", mpaa: "R", year: 1990, runtime: 119, synopsis: "When a millionaire wheeler-dealer enters a business contract with a Hollywood hooker Vivian Ward, he loses his heart in the bargain.", availability: false)
m15 = Movie.create(store_id: s3.id, title: "Sister Act", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xZvVSZ0RTxIjblLV87vs7ADM12m.jpg", mpaa: "PG", year: 1992, runtime: 100, synopsis: "A Reno singer witnesses a mob murder and the cops stash her in a nunnery to protect her from the mob's hitmen. The mother superior does not trust her, and takes steps to limit her influence on the other nuns. Eventually the singer rescues the failing choir and begins helping with community projects, which gets her an interview on TV—and identification by the mob.", availability: true)
m16 = Movie.create(store_id: s4.id, title: "American Beauty", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s5PXkDqS8W3K4wCPNZBzf10zycw.jpg", mpaa: "R", year: 1999, runtime: 122, synopsis: "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.", availability: false)
m17 = Movie.create(store_id: s4.id, title: "The Birdcage", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hU2XeckncHS61TWZKDtw1BrKmOO.jpg", mpaa: "R", year: 1996, runtime: 117, synopsis: "A gay cabaret owner and his drag queen companion agree to put up a false straight front so that their son can introduce them to his fiancé's conservative moralistic parents.", availability: false)
m18 = Movie.create(store_id: s4.id, title: "Hook", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/a6rB1lGXoGms7gWxRfJneQmAjNV.jpg", mpaa: "PG", year: 1991, runtime: 144, synopsis: "The boy who wasn't supposed grow up—Peter Pan—does just that, becoming a soulless corporate lawyer whose workaholism could cost him his wife and kids. During his trip to see Granny Wendy in London, the vengeful Capt. Hook kidnaps Peter's kids and forces Peter to return to Neverland.", availability: true)
m19 = Movie.create(store_id: s4.id, title: "The Nightmare Before Christmas", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oQffRNjK8e19rF7xVYEN8ew0j7b.jpg", mpaa: "PG", year: 1993, runtime: 76, synopsis: "Tired of scaring humans every October 31 with the same old bag of tricks, Jack Skellington, the spindly king of Halloween Town, kidnaps Santa Claus and plans to deliver shrunken heads and other ghoulish gifts to children on Christmas morning. But as Christmas approaches, Jack's rag-doll girlfriend, Sally, tries to foil his misguided plans.", availability: false)
m20 = Movie.create(store_id: s4.id, title: "The Sandlot", poster_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7PYqz0viEuW8qTvuGinUMjDWMnj.jpg", mpaa: "PG", year: 1993, runtime: 101, synopsis: "During a summer of friendship and adventure, one boy becomes a part of the gang, nine boys become a team and their leader becomes a legend by confronting the terrifying mystery beyond the right field wall.", availability: true)



puts "Renting Movies"

r1 = Rental.create(user_id: u1.id, store_id: s1.id, movie_id: m1.id)
r2 = Rental.create(user_id: u1.id, store_id: s1.id, movie_id: m2.id)
r3 = Rental.create(user_id: u2.id, store_id: s2.id, movie_id: m6.id)
r4 = Rental.create(user_id: u2.id, store_id: s2.id, movie_id: m7.id)
r5 = Rental.create(user_id: u3.id, store_id: s2.id, movie_id: m8.id)
r6 = Rental.create(user_id: u3.id, store_id: s3.id, movie_id: m12.id)
r7 = Rental.create(user_id: u3.id, store_id: s3.id, movie_id: m14.id)
r8 = Rental.create(user_id: u4.id, store_id: s4.id, movie_id: m16.id)
r9 = Rental.create(user_id: u5.id, store_id: s4.id, movie_id: m17.id)
r10 = Rental.create(user_id: u5.id, store_id: s4.id, movie_id: m19.id)


puts "Seeding done!"