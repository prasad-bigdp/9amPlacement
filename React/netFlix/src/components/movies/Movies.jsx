import React from 'react'
import './Movies.css'
import Movie from '../movie/Movie'
function Movies ()
{
  const movies = [
		{
			id: 1,
			title: "The Wizard of Oz",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_SX300.jpg",
			imdbId: "tt0032138",
		},
		{
			id: 2,
			title: "Citizen Kane",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			imdbId: "tt0033467",
		},
		{
			id: 3,
			title: "The Third Man",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYjE2OTdhMWUtOGJlMy00ZDViLWIzZjgtYjZkZGZmMDZjYmEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			imdbId: "tt0041959",
		},
		{
			id: 4,
			title: "It Happened One Night",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZmViYmM5OTYtNGQ4Ny00YjQyLThiNjEtYTE4MGZhZTNmZjcyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
			imdbId: "tt0025316",
		},
		{
			id: 5,
			title: "Casablanca",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
			imdbId: "tt0034583",
		},
		{
			id: 6,
			title: "All About Eve",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_SX300.jpg",
			imdbId: "tt0042192",
		},
		{
			id: 7,
			title: "Metropolis",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
			imdbId: "tt0017136",
		},
		{
			id: 8,
			title: "Modern Times",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
			imdbId: "tt0027977",
		},
		{
			id: 9,
			title: "King Kong",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZTY3YjYxZGQtMTM2YS00ZmYwLWFlM2QtOWFlMTU1NTAyZDQ2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg",
			imdbId: "tt0024216",
		},
		{
			id: 10,
			title: "Singin' in the Rain",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMWUyNjQ5MTAtNDJhYS00MWQ0LTk2ZTAtZmE4MWNlMjMwMzg3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
			imdbId: "tt0045152",
		},
		{
			id: 11,
			title: "Psycho",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			imdbId: "tt0054215",
		},
		{
			id: 12,
			title: "Laura",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYjkxOGM5OTktNTRmZi00MjhlLWE2MDktNzY3NjY3NmRjNDUyXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
			imdbId: "tt0037008",
		},
		{
			id: 13,
			title: "The Adventures of Robin Hood",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYjZjOTU3MTMtYTM5YS00YjZmLThmNmMtODcwOTM1NmRiMWM2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0029843",
		},
		{
			id: 14,
			title: "Snow White and the Seven Dwarfs",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMTQwMzE2Mzc4M15BMl5BanBnXkFtZTcwMTE4NTc1Nw@@._V1_SX300.jpg",
			imdbId: "tt0029583",
		},
		{
			id: 15,
			title: "A Hard Day's Night",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZjQyMGUwNzAtNTc2MC00Y2FjLThlM2ItZGRjNzM0OWVmZGYyXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0058182",
		},
		{
			id: 16,
			title: "Repulsion",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZTU5ZThjNzAtNjc4NC00OTViLWIxYTYtODFmMTk5Y2NjZjZiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0059646",
		},
		{
			id: 17,
			title: "North by Northwest",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0053125",
		},
		{
			id: 18,
			title: "Rear Window",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
			imdbId: "tt0047396",
		},
		{
			id: 19,
			title: "The Philadelphia Story",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYjQ4ZDA4NGMtMTkwYi00NThiLThhZDUtZTEzNTAxOWYyY2E4XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SX300.jpg",
			imdbId: "tt0032904",
		},
		{
			id: 20,
			title: "Touch of Evil",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BOTA1MjA3M2EtMmJjZS00OWViLTkwMTEtM2E5ZDk0NTAyNGJiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			imdbId: "tt0052311",
		},
		{
			id: 21,
			title: "All Quiet on the Western Front",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMzg2MWQ4MDEtOGZlNi00MTg0LWIwMjQtYWY5NTQwYmUzMWNmXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SX300.jpg",
			imdbId: "tt0020629",
		},
		{
			id: 22,
			title: "Vertigo",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0052357",
		},
		{
			id: 23,
			title: "Rebecca",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYTcxYWExOTMtMWFmYy00ZjgzLWI0YjktNWEzYzJkZTg0NDdmL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0032976",
		},
		{
			id: 24,
			title: "The Treasure of the Sierra Madre",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BOTJlZWMxYzEtMjlkMS00ODE0LThlM2ItMDI3NGQ2YjhmMzkxXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
			imdbId: "tt0040897",
		},
		{
			id: 25,
			title: "Lawrence of Arabia",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
			imdbId: "tt0056172",
		},
		{
			id: 26,
			title: "The Big Sleep",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMjdiM2IyZmQtODJiYy00NDNkLTllYmItMmFjMDNiYTQyOGVkXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
			imdbId: "tt0038355",
		},
		{
			id: 27,
			title: "Frankenstein",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BN2RjNjU4MmUtZWU5MS00MjdhLTkxM2MtYjBiM2FhYTE4OTQwXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
			imdbId: "tt0021884",
		},
		{
			id: 28,
			title: "A Streetcar Named Desire",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNzk2M2Y3MzYtNGMzMi00Y2FjLTkwODQtNmExYWU3ZWY3NzExXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
			imdbId: "tt0044081",
		},
		{
			id: 29,
			title: "Kind Hearts and Coronets",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNjI5N2Y4YWEtYThmOC00ODA0LTlhMGYtNmE3MmVmNjNhYWQyXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
			imdbId: "tt0041546",
		},
		{
			id: 30,
			title: "Chinatown",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BOGMwYmY5ZmEtMzY1Yi00OWJiLTk1Y2MtMzI2MjBhYmZkNTQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			imdbId: "tt0071315",
		},
		{
			id: 31,
			title: "Rosemary's Baby",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZmEwZGU2NzctYzlmNi00MGJkLWE3N2MtYjBlN2ZhMGJkZTZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
			imdbId: "tt0063522",
		},
		{
			id: 32,
			title:
				"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			imdbId: "tt0057012",
		},
		{
			id: 33,
			title: "The 39 Steps",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMTY5ODAzMTcwOF5BMl5BanBnXkFtZTcwMzYxNDYyNA@@._V1_SX300.jpg",
			imdbId: "tt0026029",
		},
		{
			id: 34,
			title: "On the Waterfront",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BY2I0MWFiZDMtNWQyYy00Njk5LTk3MDktZjZjNTNmZmVkYjkxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0047296",
		},
		{
			id: 35,
			title: "The Lady Vanishes",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNjk3YzFjYTktOGY0ZS00Y2EwLTk2NTctYTI1Nzc2OWNiN2I4XkEyXkFqcGdeQXVyNzM0MTUwNTY@._V1_SX300.jpg",
			imdbId: "tt0030341",
		},
		{
			id: 36,
			title: "The Last Picture Show",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNmVjNzZkZjQtYmM5ZC00M2I0LWJhNzktNDk3MGU1NWMxMjFjXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0067328",
		},
		{
			id: 37,
			title: "The Grapes of Wrath",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNzJiOGI2MjctYjUyMS00ZjkzLWE2ZmUtOTg4NTZkOTNhZDc1L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0032551",
		},
		{
			id: 38,
			title: "Roman Holiday",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMTE2MDM4MTMtZmNkZC00Y2QyLWE0YjUtMTAxZGJmODMxMDM0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0046250",
		},
		{
			id: 39,
			title: "Cool Hand Luke",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BOWFlNzZhYmYtYTI5YS00MDQyLWIyNTUtNTRjMWUwNTEzNjA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
			imdbId: "tt0061512",
		},
		{
			id: 40,
			title: "The Gold Rush",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
			imdbId: "tt0015864",
		},
		{
			id: 41,
			title: "Gone with the Wind",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			imdbId: "tt0031381",
		},
		{
			id: 42,
			title: "The Leopard",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYTgxZjc4NjQtZWJlNS00MTNlLWE3NDQtMmEwZTEyZDMxMjVlXkEyXkFqcGdeQXVyNzMzNzY1OTQ@._V1_SX300.jpg",
			imdbId: "tt0057091",
		},
		{
			id: 43,
			title: "Battleship Potemkin",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg",
			imdbId: "tt0015648",
		},
		{
			id: 44,
			title: "Anatomy of a Murder",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMzM0MzE2ZTAtZTBjZS00MTk5LTg5OTEtNjNmYmQ5NzU2OTUyXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
			imdbId: "tt0052561",
		},
		{
			id: 45,
			title: "It's a Wonderful Life",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg",
			imdbId: "tt0038650",
		},
		{
			id: 46,
			title: "Invasion of the Body Snatchers",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYTExYjM3MDYtMzg4MC00MjU4LTljZjAtYzdlMTFmYTJmYTE4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
			imdbId: "tt0049366",
		},
		{
			id: 47,
			title: "An American in Paris",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMzFkNGM0YTUtZjY5Ny00NzBkLWE1NTAtYzUxNjUyZmJlODMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0043278",
		},
		{
			id: 48,
			title: "The Red Shoes",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BOWRmNGEwZjUtZjEwNS00OGZmLThhMmEtZTJlMTU5MGQ3ZWUwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0040725",
		},
		{
			id: 49,
			title: "City Lights",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			imdbId: "tt0021749",
		},
		{
			id: 50,
			title: "Mary Poppins",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNmJkODczNjItNDI5Yy00MGI1LTkyOWItZDNmNjM4ZGI1ZDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
			imdbId: "tt0058331",
		},
		{
			id: 51,
			title: "Rio Bravo",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZDVhMTk1NjUtYjc0OS00OTE1LTk1NTYtYWMzMDI5OTlmYzU2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0053221",
		},
		{
			id: 52,
			title: "Sweet Smell of Success",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMjE5NTU3YWYtOWIxNi00YWZhLTg2NzktYzVjZWY5MDQ4NzVlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0051036",
		},
		{
			id: 53,
			title: "To Be or Not to Be",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYTIwNDcyMjktMTczMy00NDM5LTlhNDEtMmE3NGVjOTM2YjQ3XkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_SX300.jpg",
			imdbId: "tt0035446",
		},
		{
			id: 54,
			title: "Miracle on 34th Street",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNjRkOGEwYTUtY2E5Yy00ODg4LTk2ZWItY2IyMzUxOGVhMTM1XkEyXkFqcGdeQXVyNDk0MDg4NDk@._V1_SX300.jpg",
			imdbId: "tt0039628",
		},
		{
			id: 55,
			title: "His Girl Friday",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZDVmZTZkYjMtNmViZC00ODEzLTgwNDAtNmQ3OGQwOWY5YjFmXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
			imdbId: "tt0032599",
		},
		{
			id: 56,
			title: "The African Queen",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BOTg0NjY1NTEyMF5BMl5BanBnXkFtZTgwNjUwMTY3MjE@._V1_SX300.jpg",
			imdbId: "tt0043265",
		},
		{
			id: 57,
			title: "The French Connection",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BOTZhY2E3NmItMGIwNi00OTA2LThkYmEtODFiZTM0NGI0ZWU5XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg",
			imdbId: "tt0067116",
		},
		{
			id: 58,
			title: "Some Like It Hot",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
			imdbId: "tt0053291",
		},
		{
			id: 59,
			title: "Freaks",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMjMyYjgyOTQtZDVlZS00NTQ0LWJiNDItNGRlZmM3Yzc0N2Y0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
			imdbId: "tt0022913",
		},
		{
			id: 60,
			title: "Night of the Living Dead",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMjRjZjE3OGUtYzIyYy00NGRkLTliYTUtYmI1ZjQ3YmZjYTZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
			imdbId: "tt0063350",
		},
		{
			id: 61,
			title: "Gentlemen Prefer Blondes",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNTRhZDViOTYtOGY5OC00ODk4LWJkZWYtYjFkZWZkMzVmNjY2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
			imdbId: "tt0045810",
		},
		{
			id: 62,
			title: "Don't Look Now",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMDM2YTQ3ODMtMDkyNS00YzM0LTgwNzUtYWI0NTFmZWE4YTQxXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
			imdbId: "tt0069995",
		},
		{
			id: 63,
			title: "The Best Years of Our Lives",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BY2RmNTRjYzctODI4Ni00MzQyLWEyNTAtNjU0N2JkMTNhNjJkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
			imdbId: "tt0036868",
		},
		{
			id: 64,
			title: "Throne of Blood",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNGYxZjA2M2ItYTRmNS00NzRmLWJkYzgtYTdiNGFlZDI5ZjNmXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
			imdbId: "tt0050613",
		},
		{
			id: 65,
			title: "The Manchurian Candidate",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BOTY0ZTA1ZjUtN2MyNi00ZGRmLWExYmMtOTkyNzI1NGQ2Y2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0056218",
		},
		{
			id: 66,
			title: "The Searchers",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYWQ3YWJiMDEtMDBhNS00YjY1LTkzNmEtY2U4Njg4MjQ3YWE3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			imdbId: "tt0049730",
		},
		{
			id: 67,
			title: "Spartacus",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMjc4MTUxN2UtMmU1NC00MjQyLTk3YTYtZTQ0YzEzZDc0Njc0XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
			imdbId: "tt0054331",
		},
		{
			id: 68,
			title: "Forbidden Planet",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BOTdmODZkNmQtYjU4Mi00MTcyLTg5YmEtNmVjMWU1M2Y5NzgyXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
			imdbId: "tt0049223",
		},
		{
			id: 69,
			title: "The Birth of a Nation",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYTM4ZDhiYTQtYzExNC00YjVlLTg2YWYtYTk3NTAzMzcwNTExXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
			imdbId: "tt0004972",
		},
		{
			id: 70,
			title: "The Bridge on the River Kwai",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMGVhNjhjODktODgxYS00MDdhLTlkZjktYTkyNzQxMTU0ZDYxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			imdbId: "tt0050212",
		},
		{
			id: 71,
			title: "Goldfinger",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMTQ2MzE0OTU3NV5BMl5BanBnXkFtZTcwNjQxNTgzNA@@._V1_SX300.jpg",
			imdbId: "tt0058150",
		},
		{
			id: 72,
			title: "Paths of Glory",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNjViMmRkOTEtM2ViOS00ODg0LWJhYWEtNTBlOGQxNDczOGY3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
			imdbId: "tt0050825",
		},
		{
			id: 73,
			title: "Peeping Tom",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZjM3ZTAzZDYtZmFjZS00YmQ1LWJlOWEtN2I4MDRmYzY5YmRlL2ltYWdlXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg",
			imdbId: "tt0054167",
		},
		{
			id: 74,
			title: "The Day the Earth Stood Still",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZGZmZTI2MzYtNjJmZS00OTE0LTg5NGEtNGJkMTIyN2U0NDFiXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
			imdbId: "tt0043456",
		},
		{
			id: 75,
			title: "The Apartment",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNzkwODFjNzItMmMwNi00MTU5LWE2MzktM2M4ZDczZGM1MmViXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
			imdbId: "tt0053604",
		},
		{
			id: 76,
			title: "Ran",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZDBjZTM4ZmEtOTA5ZC00NTQzLTkyNzYtMmUxNGU2YjI5YjU5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
			imdbId: "tt0089881",
		},
		{
			id: 77,
			title: "The Lord of the Rings: The Two Towers",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			imdbId: "tt0167261",
		},
		{
			id: 78,
			title: "Rebel Without a Cause",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMjMwNWIwYzAtMWVhZi00YzQ2LTlmNGYtOTg3NDdkNTRjOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0048545",
		},
		{
			id: 79,
			title: "The Birds",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMTAxNDA1ODc5MDleQTJeQWpwZ15BbWU4MDg2MDA4OTEx._V1_SX300.jpg",
			imdbId: "tt0056869",
		},
		{
			id: 80,
			title: "Duck Soup",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BYmYxZGU2NWYtNzQxZS00NmEyLWIzN2YtMDk5MWM0ODc5ZTE4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
			imdbId: "tt0023969",
		},
		{
			id: 81,
			title: "One Flew Over the Cuckoo's Nest",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
			imdbId: "tt0073486",
		},
		{
			id: 82,
			title: "Patton",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMmNhZmJhMmYtNjlkMC00MjhjLTk1NzMtMTNlMzYzNjZlMjNiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
			imdbId: "tt0066206",
		},
		{
			id: 83,
			title: "Mean Streets",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMWNmNGY3ZGMtYWQ3OC00Zjg4LWFiN2EtZjM2MDI1YzRiNjg3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
			imdbId: "tt0070379",
		},
		{
			id: 84,
			title: "Dr. No",
			posterURL:
				"https://m.media-amazon.com/images/M/MV5BMTk4YzdjOTgtNjM4NS00YjljLThhM2QtYTI3OTQ0OGVhNTMxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
			imdbId: "tt0055928",
		},
	]
  return (
		<div>
			{movies.map((val) => (
				<Movie
					url={val.posterURL}
					name={val.title}
				/>
			))}
		</div>
	)
}

export default Movies
