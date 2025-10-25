'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a0c514657eb72153380d22de5c600d06",
"version.json": "f313c22dc18f235f6fee1671df2f5378",
"index.html": "485eb67fb7a0bd62465a00209ec3f48a",
"/": "485eb67fb7a0bd62465a00209ec3f48a",
"main.dart.js": "2141fc566e29d367f082ecb1651175de",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7abe013df7f294a88e143dec7f817d45",
".git/config": "4bdf82aa28ac7a63e66a9d60202554b0",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/68/586da00124b12933dffab2131c028d80d8be1e": "e9ea08693bb043bfb52244684fdaad1d",
".git/objects/3b/a9d9b933b0b847e2d1cbf8391f281c8bb3fcb3": "e657c4b7f4eddb7b97c834c14374fb85",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/04/0833a7e0f5be58d3f6c5a33a5a578f9bbfaa5c": "29e430e4e32a6ce21bb41d9a622d2011",
".git/objects/32/41f67850ed1356a6a7f37af0e88aca50374500": "cd78f74c360b4a265f6d74e48a232e0a",
".git/objects/0e/69aa38ad3558ad31d6b3569aaee9de115fb331": "36c06009046c1475143bfbcf8d0b1b7f",
".git/objects/5a/710ffa5e1359250850c515207a1069cdd5802c": "9baf72ef7aa867b9ea2d1da3a80f4d58",
".git/objects/33/c28bb144c4f2c4cafae8aa0b8429e44298a0cf": "b5762e295e7de118efb1d29e07d56f99",
".git/objects/05/0df41f5a3d81f1bbbc8257e818c216ae1f42ae": "e1709b0574ae85adeac8dd2823e6363e",
".git/objects/9c/5a761f95bb4fba0d4328c2f7b9c6436d313932": "a3c1934569a97c90cee1eafc749814f8",
".git/objects/ad/7481a4ec00d6c505ee068d86521ab1c205b718": "15b308d50555277a333f6861d2500e10",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/8f64554087ad5bcce3a1af92a63439ddd4b76e": "a8dbaa02a2384d547109c461f651da22",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/d8db2ed901ce78275df5f9a096f1ad027a028a": "91d6ef7cb7973cfb0dd7bd4fb01dbfeb",
".git/objects/c0/3f92929b57718b66bf0f198fa2339c660cc531": "47649ba87d4c5151c99dcc791d81c71c",
".git/objects/fc/4a56d141635551124d89e596a92f4956894a3d": "4fbe89f06a59af20c0eac1fde8a024b4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/a3cd1abe963ad91e12e9861117917b235e4460": "6ad24f839bf772e3a2f867541c0f713a",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fb/30857ba5aa4ee0468f9ae94c6441571b140712": "d4db51df411b1bcb5b568cf42a8bb3c9",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c1/75179048a8ef17baed9003b1ea3da3f21037ed": "15e7a78f9f746dc680c66ecd8486ef11",
".git/objects/c6/fe372ce75098c0958fdb839e99faf57fd8703c": "57466070ec1fe0bb60a8dfb66c142065",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/18/b7e2171eac99236d9596ea269407cb0d855b0f": "22c9232bcb740b2864936797a6c9df6a",
".git/objects/27/d246a695e2acc27a4297c940301ae7fde029e1": "98d504c924a233eb5322d8d3533637b2",
".git/objects/11/3c099e8e5f8ad151f349a307205d4f1301f7c4": "cc43a563c7cac4076e56fe23d91124ac",
".git/objects/7d/c9151c6dc5d763c17ca2832421835156320e7c": "e20677ef7600917417454f5eb1eff5fe",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/16/b6b0d52832a079cff50ef10613933382203df7": "5f58eb51a0649911503f61a32634b038",
".git/objects/42/9d8b7eca3ed14aa67c4009a2f70f15e7017e14": "b51f20acce5712432c944979a68bb707",
".git/objects/89/144c4a06095ef303472bf54186935e6e124f3c": "0bfbb332f934656fccdf55fe7b318a7a",
".git/objects/74/51d4ff74f91603cc6448c811d4a45816a01fb6": "f50c0a9eef130e9e6f4021cc34349980",
".git/objects/7b/3ae90793ea31e20698c3919240a4482431e317": "662ca279bdd71ff64a96ad5ef82c34d7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/5bfc9287b3103a1918e981eecc7076b19b6fa3": "22e157ed887df30e64c4806b0052bc19",
".git/objects/4c/605fb40f5753b031095fde52e5a5cfa8efe5e5": "a7e11a428233e9ae42ea0a0a6763fe74",
".git/objects/26/e26b5f4a222d795238da1b0bda56a6e7d13166": "1cffca43bd7a9900a05540d7380b8c00",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/94bfd3651a02bf1e3cf2bfe576ef498a0c8ad0": "acd10f84489cfbb8e945eeb2b28ae097",
".git/objects/6e/06fbc38808b0f6745e42a3a6480bb4c229bfb9": "5cdfe44b9e3cc4250e02feb2a0af2228",
".git/objects/96/add741c9d2f669b58a8f8b120731bf105de628": "357b0b7d9c4f6fbd11d85e2b97c081b2",
".git/objects/98/028a821d7a85fc09254ce0eecc2d32f4187450": "5d784baacb6cf2bfa38d6919ba987f0a",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/5e/ad8408dbca5ba9377fd337287e1622ed874f07": "4a04765bcfc1991343cd0b597a68b169",
".git/objects/37/c2887a297210cb527bba6e5f6e8671c6538a3b": "9690c52f727a998ff7615e0757f40b62",
".git/objects/08/babe3e8ee62143005d6fce44330e42cc04b216": "eddad9873a3151b6e6c3a9340347fd1a",
".git/objects/97/d2d649febf7819d0ebe25c7eb0e649394aad1a": "16278c42e2a06b002f57b0615fe33302",
".git/objects/bf/2f4f4012ef25769a46159abbd2bd4f267d5525": "72149decd2aeae80d3193d394d3232d5",
".git/objects/d3/6a952ba4892b6e8294711538c36891549fe986": "6ca75ef9aff6bb8c70edc3f63abd58c2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/af8437025c753dc538cac2b4809dab9fbc05bb": "c778d3413c4d120e00504267b159d7c5",
".git/objects/ba/da78d6caa493ada2d35e9dce01a4800f6a5c7d": "2a138d33cea7c9acdfeacbf6ba730832",
".git/objects/a0/a51f8a39ef94795a25db0171f04e546b751062": "9896fa84cdd33f6f34f5b7b036813e9d",
".git/objects/b8/dddf22bb14dc9bb31cdb0a0d1c1d71f94fbfec": "c22a2cf74213bf8386f9722d8149fea1",
".git/objects/dc/a22e6c51170c246607c55ae816b0416097802d": "2caa4cb9e8d24ede8f1c4e78f08e9be5",
".git/objects/b6/f6491aaa6aba121ef2ea9606ca36ee5b268ca4": "2f1446f99296828ed8c0c71031e48971",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/a9/76b0fe6bc21d059ab9eaab58c4ca35b12707e5": "bf090eafb0c3b879ac2a1a1985d9dd1e",
".git/objects/af/8db6f39645531bdad1271522d90fc81b55584b": "a425e5912bdcada1f072f988450f20f8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ea/f8b7306000e71d0db526fe8b13e51b9b4cd38f": "fc480acddda0a8c42027131e07155a44",
".git/objects/e1/416a8b128a34dd0d5935235ca3e44c85dd801b": "f118d6060f6ae71ddba9813afdd52ceb",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/292e705030af6f9b5ec40b63abb1fa99e1e889": "161cad5697f38427d45a3164c7519346",
".git/objects/ff/d04c1b97c31904c4331eb5b8455132a7aa3e42": "1b0efeab120afa735196ec962659fb8b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/79abb18ef1a2e48d3bd5e9565242f402e9cf23": "d8efdb2e7caf18206b8b248822fc3e1d",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/41/b5811819eab2a983462d72aba178fe226712ae": "89b145fb5d385a1817c652c02028fbb1",
".git/objects/83/f1c63d977c088aaf2c8661bdf584982cab2cb0": "2bab5d88d6e7cd9b62e1b003b2b7a4c8",
".git/objects/1b/ec6ed0ac990b1df6f4a9a44d57072dc0fe3fcf": "7e64caafce9cca99cb7403c3123d2402",
".git/objects/77/766355660bd7420beff3ace5112d4721b4a5ad": "92812ef8038203f7de6d462c8128ed0a",
".git/objects/77/c6c59a4b3082c0764bea0aa66f386224e97cd9": "700fec537e603b4baa6021676d14231d",
".git/objects/70/a924a51aebe7367be46784e8ed3c6cb1035027": "496d516a9cb0865636f79f4df897be3a",
".git/objects/70/954429cac41575321d512bc9a5ec3305ab9d07": "91e833b62484915873c202a7465c0f36",
".git/objects/23/e726f5715b1529b7ebb3087d3dc9b72569869e": "4fd8d9d0eb72d1e4372d93db79b525f8",
".git/objects/23/4a00d63d3913c44aa4c3b2601f450cf31e4522": "7a242455b26ae6101e29579076e0c8bf",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/1c/48842454d3aed5244ea9d40407ce228d8da432": "cca44b1c7e59812f02aec162355ae8a5",
".git/objects/82/371b33bf840709705abdcc490006ed0b983866": "b91e38ce975f060bb1c370de45fe5b29",
".git/objects/49/433aaf776b3700d06b3c8b6305d3c78d66b94d": "afcf856c36caa03efddd0a20cb858949",
".git/objects/49/09705e2752b80d94b338df57bb2163e9d3dc77": "baec543c020ed9c0d4a4619a83e5bd8a",
".git/objects/40/1066385142f211db5ee0df8f53296133b2bcb7": "55cbb6fe0e7ebe96a2a037b342a46661",
".git/objects/13/4cf87fadeb0881c0c9541793d9ad35945888cd": "6f94ddfd23a1217865c2c8b0f50f8e34",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/8e/a5206af5299ea546aee06e6ba95c6843e4152e": "2e596ebbbdc5d9b1b4000202bb6a18d7",
".git/objects/22/34bcf9d22bf3538ad733c380e9085e285e38b6": "10d551d9f1b7dd5d28bfb2fc188a3d20",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "79372bf741c9d6813048752b6c46fa2b",
".git/logs/refs/heads/main": "eff29c6150b89344e50fb28274386b69",
".git/logs/refs/remotes/origin/HEAD": "fb2295d41477ec167ca2a6d70bb279f4",
".git/logs/refs/remotes/origin/main": "81071b78cf123990080598ba7958e055",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4cd7022f2f367bd0c0803ddfbfe3d882",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "157bdf759ba4bc2b20fb985620e20d12",
".git/index": "8310364d8daca8a3abc24c371608bcde",
".git/COMMIT_EDITMSG": "8ca9c09ade6d81274a2e3eb261c659a8",
".git/FETCH_HEAD": "1d535be29b4726b46ad18374af26c8ba",
"assets/AssetManifest.json": "4f6fcc2d85470b7ff40a21ddec97ef00",
"assets/NOTICES": "9dbb4863820ab5deae5f15fb367cd993",
"assets/FontManifest.json": "38a3a886d96d804ccb0a88a1df46db8a",
"assets/AssetManifest.bin.json": "b0d9aa78e4b95ea4398a96eb32d96a5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "66325af4a4a74d7a5198f5663bf760cd",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/data.json": "b11d045c169ade90e92f60bb6178d1e0",
"assets/assets/videos/README.md": "3224cb805de8e2c7444f8527f9512071",
"assets/assets/graphics/clients/client_12.png": "17c5f783500d850b8c1cb784f84f05c6",
"assets/assets/graphics/clients/client_13.png": "08d932d87248b0535caf1b48c89debee",
"assets/assets/graphics/clients/client_11.png": "5b7831a1121db81679307568e6ea9d22",
"assets/assets/graphics/clients/client_10.png": "d45489a082c15a267fd8680384fc7c9d",
"assets/assets/graphics/clients/client_28.png": "2bc34cc8598fd8b280e6af524070f8d3",
"assets/assets/graphics/clients/client_14.png": "c6c033db65b4bf4f84a131997d5dc2f5",
"assets/assets/graphics/clients/client_15.png": "022e4c330e8c022343dce40688394c83",
"assets/assets/graphics/clients/client_17.png": "18ddb3d621740d8ca4d45391d3ac1142",
"assets/assets/graphics/clients/client_16.png": "261b4b111ec952ad8639bd4e8b48872d",
"assets/assets/graphics/clients/client_7.png": "6355a3346657d8cc01ed7b60676b2bc3",
"assets/assets/graphics/clients/client_6.png": "6537537fe1a210726c3188395d94d524",
"assets/assets/graphics/clients/client_4.png": "d9c06b7d0fe4273bef3bf750a2551016",
"assets/assets/graphics/clients/client_5.png": "0b30f2bd366bc6b7de894c96f47cff71",
"assets/assets/graphics/clients/client_1.png": "19c39b1dd698e1d06196eaa5c9b13bf4",
"assets/assets/graphics/clients/client_2.png": "53105f5d63832d23ce8d7c28c683c45e",
"assets/assets/graphics/clients/client_3.png": "59eafacce66f151365a2f486c6e8c459",
"assets/assets/graphics/clients/README.md": "dd0296ff9af6a6e93c3217b7105493ad",
"assets/assets/graphics/clients/client_8.png": "74a6d2187fe06493621cd2b46dbdd9ec",
"assets/assets/graphics/clients/client_9.png": "004796d18a8bd8069ddfeb1ddbec5b5b",
"assets/assets/graphics/clients/client_27.png": "9654a27016d00c63a0829a308870c3ec",
"assets/assets/graphics/clients/client_26.png": "6b04f99d0c292f73c693baa8c4aed3d7",
"assets/assets/graphics/clients/client_24.png": "c76333da5180448df41ba73e0d5481c1",
"assets/assets/graphics/clients/client_18.png": "c9364a324fca672046300dcf23fbcab3",
"assets/assets/graphics/clients/client_19.png": "f8a09d83b1d1cedc39991a920ca554b6",
"assets/assets/graphics/clients/client_25.png": "d85b8d0930a6beb0dbf0698e1bf4f756",
"assets/assets/graphics/clients/client_21.png": "d641e5055da17028782f0988ce31b048",
"assets/assets/graphics/clients/client_20.png": "d452577bd5bf59b834051bc94ead771e",
"assets/assets/graphics/clients/client_22.png": "8bafaec1490c75531eb3c47073aa8e2e",
"assets/assets/graphics/clients/client_23.png": "9af82da4b54feecfe320613746cfd32c",
"assets/assets/graphics/circle.svg": "da246be7897ac9cf1775a1698281c264",
"assets/assets/graphics/clock_white.svg": "1e9ad48468158ea6d8587cb29479ca54",
"assets/assets/graphics/gear_gif.gif": "dd4876ebdf4437a1df13aa2474a45ea4",
"assets/assets/graphics/clock_work_360.svg": "e433125ee8c7b0c34b73fd116153a52b",
"assets/assets/graphics/gears.svg": "86c606fa44d8e8d5a5cd7a2c12cc2fa1",
"assets/assets/graphics/clock_red_side.png": "3498bb78781ad639a5ed495ec6c50e73",
"assets/assets/graphics/clock.png": "21abd9928458b753d8ff661beed02056",
"assets/assets/graphics/4.png": "f3bc6588e68ab9d06481636caf4d0656",
"assets/assets/graphics/clock_black_side.png": "ac56099ba4896a43f4d3d56f9e1912f9",
"assets/assets/graphics/clock_black.svg": "9fbc93f72982f7e4680c35299010e065",
"assets/assets/graphics/3.png": "cedea7936da9369b87d74bb3dbfcd826",
"assets/assets/graphics/triangles.svg": "14804a6d2b7f390c1b099ee504687727",
"assets/assets/fonts/allerDisplay.ttf": "4cf80f22e2f9d7f0b9bd2381d6c5886c",
"assets/assets/fonts/almonte_woodgrain.ttf": "75b52b557740a520c8e36a89f2e69047",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
