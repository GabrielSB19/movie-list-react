const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2E3MGNkYjVhZWI2ODhkZjdiZTQ1ZTA1OWZjYWFmMyIsInN1YiI6IjY0ZTI2ZTdlMWQxYmY0MDBlNDZiYzQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lcWRhK-r6Sn77sc2jET9RaslufuY3uCJKRCi31T9njA",
      "Content-Type": "application/ json; charset=utf-8",
    },
  }).then((res) => res.json());
}
