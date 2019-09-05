let Mock = require ("mockjs");
Mock.mock("/homes","get",require("./json/homes.json"));
Mock.mock("/movies","get",require("./json/movie.json"));
Mock.mock("/movienav","get",require("./json/movieNav.json"));
Mock.mock("/books","get",require("./json/books.json"));
Mock.mock("/booknav","get",require("./json/bookNav.json"));
Mock.mock("/xiaozu","get",require("./json/xiaozu.json"));