export const getCityImage = (city) => {
  switch (city) {
    case "Tokyo":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Shiba-koen%2C_aerial_view_on_Tokyo_Tower_at_dusk_%28Unsplash%29.jpg/428px-Shiba-koen%2C_aerial_view_on_Tokyo_Tower_at_dusk_%28Unsplash%29.jpg";
    case "Berlin":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1200px-Brandenburger_Tor_abends.jpg";
    case "New York":
      return "https://images.ctfassets.net/rc3dlxapnu6k/3kr7ZE7ubwwcMgMRErjDiu/eb06376778695aa1c8c22e7bbbeff667/USA__New_York.jpg?w=2121&h=1193&fl=progressive&q=50&fm=jpg";
    case "Barcelona":
      return "https://static.independent.co.uk/2023/03/10/14/iStock-1320014700.jpg";
    case "London":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/900px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg";
    case "Paris":
      return "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900";
    case "Singapur":
      return "https://feerie.com.ua/sites/default/files/styles/for_blog/public/2019-03/singapore-uber.jpg?itok=hM8BBnOw";
    case "Vienna":
      return "https://www.worldatlas.com/r/w1200/upload/33/28/b8/shutterstock-1046467867.jpg";
    case "Prague":
      return "https://a.cdn-hotels.com/gdcs/production76/d1135/21203dce-feeb-40f3-8c93-fc1a98f7549a.jpg";
    case "Rome":
      return "https://www.mappr.co/wp-content/uploads/2021/01/image-969.jpeg";
    case "Stockholm":
      return "https://www.cunard.com/content/dam/cunard/inventory-assets/ports/STO/STO.jpg";

    default:
      return null;
  }
};
