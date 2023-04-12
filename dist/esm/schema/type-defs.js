export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  # Book type is for test only
  type Book {
    title: String
    author: Author!
  }

  type Author {
    name: String!
    books: [Book!]
  }

  # Type is create from https://www.superheroapi.com/
  type SuperHero {
    id: ID!
    name: String!
    powerstats: Powerates!
    biography:Biography!
    appearance: Appearance!
    work: Work
    connections: Connections
    image: Image
  }
  
  #Int cannot represent non-integer value: "null"
  type Powerates {
    strength: String
    intelligence: String
    speed: String
    durability: String
    power: String
    combat: String
  }

  type  Biography{
    full_name: String
    alter_egos: String
    aliases: [String!]
    place_of_birth: String
    first_appearance: String
    publisher: String!
    alignment: String
  }

  type Appearance {
    gender: String
    race: String,
    height: [String!],
    weight: [ String!],
    eye_color: String,
    hair_color: String,
  }

  type Work {
    occuption: String
    base: String
  }

  type Connections {
    group_affiliation: String,
    relatives: String
  }

  type Image {
    url: String
  }

  # not used
  enum Gender {
    FAMAL
    MALE
    OTHER
  }
  # not used
  enum EyeHairColor {
    BROWN
    AMBER
    HAZEI
    GREEN
    BLUE
    GRAY
    RED
    BLOND
  }

   # Type is create to save data to database
   type Heroinfo {
    _id: ID
    # Match to SuperHero.id
    heroid: ID 
    token: String
    name: String
    powerstats: Powerates!
    image: Image
  }
 
  # Input define
  input GetSuperHeroNameInput {
    name: String!
    token: String!
  }

  input IdTokenInput {
    id: ID!
    token: String!
  }

  input UpdateHeroImageInput {
    idToken: IdTokenInput,
    url: String!
  }

  # Input used for access database
  input imageInput {
    url: String
  }

  input UpdateHeroPowerStatesInput {
      intelligence: String
      strength: String
      speed: String
      durability: String
      power: String
      combat: String
  }

  input CreateHeroinfoInput {
    heroid: ID 
    token: String
    name: String
    powerstats: UpdateHeroPowerStatesInput
    image: imageInput
  }

  input UpdateHeroByIdInput {
    id: ID!
    update: CreateHeroinfoInput!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    # Test data
    books: [Book]
    authors: [Author]
    authorNames: [String!]
    getAuthorByName(name: String!): Author

    # API access 
    getSuperHeroByName(input: GetSuperHeroNameInput!): [SuperHero]
    getSuperHeroById(input: IdTokenInput):SuperHero
    #searchHeroname(input: GetSuperHeroNameInput!): [SuperHero]
    #heroById(input: IdTokenInput):SuperHero

    # DB access
    getHeroinfos(input: IdTokenInput):[Heroinfo]
    getHeroinfosByToken(token: String!):[Heroinfo]
    getHeroinfosByHeroId(heroid: Int!): Heroinfo
    getHeroinfoByName(name: String!):[Heroinfo]
    getHeroinfoById(id: ID!): Heroinfo
  }

  type Mutation {
    # CUD database
    upsertHeroinfoByheroid(input: CreateHeroinfoInput): Heroinfo
    createHeroinfo(input: CreateHeroinfoInput): Heroinfo
    updateHeroinfoById(input: UpdateHeroByIdInput): Heroinfo
    deleteHeroinfoById(input: String!): Heroinfo
    deleteHeroinfoByHeroid(heroid: Int!): Heroinfo
    updateHeroPowerStates( input: UpdateHeroPowerStatesInput): Powerates
    updateHeroImage(id: ID!, token: String!, input: UpdateHeroImageInput): Image
    deleteHeroPowerStates(input: IdTokenInput): Powerates
    deleteHeroImage(input:UpdateHeroImageInput): Image
  }
  
`;
//# sourceMappingURL=type-defs.js.map