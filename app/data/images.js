const u = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=80`
export const images = {
  shadeSails: u("1774579892773-8a21fb9200c9"),
  tensileRoofs: u("1784637663357-cfbf73b09c0d"),
  homeInterior: u("1724582586529-62622e50c0b3"),
  livingRoom: u("1613545325278-f24b0cae1224"),
  houseDusk: u("1748063578185-3d68121b11ff"),
  houseBalconies: u("1721815693498-cc28507c0ba2"),
  officeBoardroom: u("1706074793638-da28b90ea8ae"),
  siteBlueprints: u("1774600166834-175d06febcd4"),
}
