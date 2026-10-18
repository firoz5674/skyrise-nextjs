import { images } from "./images"
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", menu: "services" },
  { label: "Areas", href: "/#contact", menu: "areas" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact Us", href: "/contact", button: true },
]
export const serviceMenuGroups = [
  {
    title: "Construction and Architecture",
    icon: "building",
    items: [
      ["House and Commercial Construction", "/services/house-and-commercial-construction", "building"],
      ["Architectural Design Services", "/services/architectural-design-services", "ruler"],
      ["Home Renovation and Remodeling", "/services/home-renovation-and-remodeling", "hammer"],
    ],
  },
  {
    title: "Interior Design",
    icon: "interior",
    items: [
      ["Turnkey Interior Design", "/services/turnkey-interior-design", "sofa"],
      ["Office Interior Design", "/services/office-interior-design", "office"],
      ["Custom Furniture and Modular Interiors", "/services/custom-furniture-and-modular-interiors", "chair"],
    ],
  },
  {
    title: "Tensile and Outdoor Structures",
    icon: "tensile",
    items: [
      ["Tensile Structures", "/services/tensile-structure-manufacturers-in-delhi", "tent"],
      ["Tensile Car Parking Structures", "/services/tensile-car-parking-structures", "car"],
      ["Tensile Canopies and Gazebos", "/services/tensile-canopies-and-gazebos", "tent"],
    ],
  },
  {
    title: "Prefab and Modular",
    icon: "prefab",
    items: [
      ["Container Homes", "/services/container-homes", "container"],
      ["Prefabricated Modular Houses", "/services/prefabricated-modular-houses", "blocks"],
      ["Porta Cabins", "/services/porta-cabins", "warehouse"],
      ["PUF Insulated Panels", "/services/puf-insulated-panels", "layers"],
      ["Aerocon Prefabricated Structures", "/services/aerocon-prefabricated-structures", "building"],
    ],
  },
]
export const serviceAreas = ["Delhi", "Noida", "Gurugram (Gurgaon)"]
export const heroContent = {
  badge: "Top Construction and Interior Company in Delhi NCR",
  title:
    "Top Construction, Interior Design & Tensile Structure Company in Delhi NCR",
  text: "Skyrise is a Delhi-registered construction and interior design company, offering home construction, turnkey interiors and tensile structures across Delhi NCR. Book a free site visit today!",
  cta: "Book a free site visit",
}
export const heroSlides = [
  {
    src: images.shadeSails,
    alt: "Tensile car parking structure in Delhi",
    pos: "center",
  },
  {
    src: images.livingRoom,
    alt: "Turnkey home interior design in Noida",
    pos: "center",
  },
  {
    src: images.houseDusk,
    alt: "House construction in Gurgaon",
    pos: "center",
  },
  {
    src: images.officeBoardroom,
    alt: "Office interior design in Delhi NCR",
    pos: "center",
  },
]
export const heroTicker = [
  "House and Commercial Construction",
  "Turnkey Interior Design",
  "Architectural Design Services",
  "Office Interior Design",
  "Home Renovation and Remodeling",
  "Custom Furniture and Modular Interiors",
  "Container Homes",
  "Prefabricated Modular Houses",
  "Tensile Structure Manufacturers",
]
export const stats = [
  { value: 300, suffix: "+", label: "projects delivered" },
  { value: 50, suffix: "+", label: "construction and interior experts" },
  { value: 25, suffix: "+", label: "years of experience" },
  { value: 10, suffix: "+", label: "cities covered" },
]
export const projectsContent = {
  title:
    "Our Construction, Interior and Tensile Structure Projects in Delhi NCR",
}
export const projects = [
  {
    src: images.shadeSails,
    alt: "Tensile car parking structure in Delhi",
    cls: "lg:col-span-7 lg:row-span-2",
  },
  {
    src: images.homeInterior,
    alt: "Turnkey home interior design in Noida",
    cls: "lg:col-span-5",
  },
  {
    src: images.houseBalconies,
    alt: "House construction in Gurgaon",
    cls: "lg:col-span-5",
  },
  {
    src: images.officeBoardroom,
    alt: "Office interior design in Delhi NCR",
    cls: "lg:col-span-4",
  },
  {
    src: images.tensileRoofs,
    alt: "Tensile roofs and canopies in Delhi",
    cls: "lg:col-span-4",
  },
  {
    src: images.houseDusk,
    alt: "Villa construction in Delhi NCR",
    cls: "lg:col-span-4",
  },
]
export const servicesContent = {
  title:
    "Top Construction, Interior and Tensile Structure Services in Delhi NCR",
  text: "Skyrise helps homeowners, businesses and developers plan, build and finish their spaces. Our construction company in Delhi NCR offers the following services:",
}
export const services = [
  {
    title: "House and Commercial Construction in Delhi NCR",
    short: "House and Commercial Construction",
    text: "As a trusted construction company in Delhi, we build independent houses, builder floors, villas, shops and commercial buildings. Our team delivers durable, energy-efficient construction that meets current building standards. Hire our building contractors in Delhi today!",
    image: images.houseBalconies,
    icon: "building",
  },
  {
    title: "Turnkey Interior Design in Delhi NCR",
    short: "Turnkey Interior Design",
    text: "Our turnkey interior designers in Delhi NCR manage everything, from concept and 3D design to material, carpentry, electrical work and handover. You deal with one team and get a ready-to-use space.",
    image: images.livingRoom,
    icon: "sofa",
  },
  {
    title: "Architectural Design Services in Delhi",
    short: "Architectural Design Services",
    text: "Our architects turn your plot and requirements into practical plans with good light, ventilation and storage. We design homes and commercial buildings that look modern and work well every day. Talk to our architects today!",
    image: images.siteBlueprints,
    icon: "ruler",
  },
  {
    title: "Office Interior Design in Delhi NCR",
    short: "Office Interior Design",
    text: "Our office interior designers in Delhi plan workspaces that support focus, teamwork and employee wellbeing. From small offices to large floors, we design layouts, workstations, meeting rooms and reception areas.",
    image: images.officeBoardroom,
    icon: "briefcase",
  },
  {
    title: "Home Renovation and Remodeling in Delhi NCR",
    short: "Home Renovation and Remodeling",
    text: "Refresh an old house or flat with expert renovation services. We handle structural changes, flooring, kitchens, bathrooms, false ceilings and painting, improving both the look and the function of your space.",
    image: images.homeInterior,
    icon: "hammer",
  },
  {
    title: "Custom Furniture and Modular Interiors",
    short: "Custom Furniture and Modular Interiors",
    text: "Our team makes bespoke furniture, modular kitchens, wardrobes, TV units and wall panelling to fit your rooms exactly. Choose your materials and finishes and add real character to every corner.",
    image: images.livingRoom,
    icon: "armchair",
    pos: "right",
  },
  {
    title: "Container Homes in Delhi NCR",
    short: "Container Homes",
    text: "Container homes are an eco-friendly and cost-effective way to build farmhouses, studios, cafes and offices. Our modular designs are insulated and finished to stay comfortable in Delhi's summers and winters.",
    image: images.houseDusk,
    icon: "container",
  },
  {
    title: "Prefabricated Modular Houses in Delhi NCR",
    short: "Prefabricated Modular Houses",
    text: "Prefabricated modular houses are made off-site and assembled quickly, so they save time and reduce construction cost. We customise layouts, sizes and finishes for homes, farmhouses and site offices.",
    image: images.houseBalconies,
    icon: "blocks",
    pos: "left",
  },
  {
    title: "Tensile Structure Manufacturers in Delhi",
    short: "Tensile Structure Manufacturers",
    text: "Skyrise designs, manufactures and installs tensile structures, including car parking shades, roofs, canopies, gazebos, domes and walkways. Our UV-resistant fabric structures give lasting shade and a striking look. Hire the leading tensile structure manufacturer in Delhi today!",
    image: images.shadeSails,
    icon: "tent",
  },
]
export const cta1 = {
  title: "Have a plot, a space or a project in mind? Let's build it together.",
  text: "Book a free site visit with the top construction and interior company in Delhi NCR today!",
  button: "Book a free site visit",
}
export const whyChoose = {
  title:
    "Why Choose Skyrise, a Trusted Construction and Interior Company in Delhi NCR",
  paragraphs: [
    "Building or redesigning a space is a big decision. Many people hire one contractor for construction, another for interiors and a third for tensile or shade work, and then spend months managing the gaps between them.",
    "Skyrise removes those gaps. Our Delhi-based team has 25+ years of experience in construction, interior design and tensile structures. One company plans the design, controls the budget and builds the space, so your project stays on track from the first sketch to the final handover. Book a free site visit with the top construction and interior company in Delhi NCR today!",
  ],
  closing:
    "We use modern methods where they add value, while our experienced team stays in control of quality on every site. Hire the best construction and interior team in Delhi NCR today!",
  points: [
    {
      title: "One team, design to handover",
      text: "Architects, engineers, interior designers and site teams work together, so there are no delays caused by handovers between vendors.",
    },
    {
      title: "On-time delivery",
      text: "We set a clear schedule at the start and plan every stage so that the project finishes when promised.",
    },
    {
      title: "Quality and sustainable materials",
      text: "We use quality, eco-friendly materials and sustainable building practices wherever the project allows.",
    },
    {
      title: "Clear quotes and budgets",
      text: "You know the scope and cost before work begins, so there are no unpleasant surprises midway.",
    },
    {
      title: "Experience since 1998",
      text: "We have handled homes, offices, shops and outdoor structures across Delhi NCR for more than two decades.",
    },
  ],
}
export const process = {
  title: "Our Construction and Interior Design Process in Delhi NCR",
  subtitle: "A smarter way to build",
  text: "A good project does not start with bricks or furniture. It starts with understanding what you need. Our team studies your plot or space, your budget, your timeline and your lifestyle before any work begins. Here is the process we follow:",
  steps: [
    {
      title: "Site Visit and Brief",
      text: "We visit your site, measure the space and listen to your needs, budget and timeline.",
    },
    {
      title: "Design and 3D Planning",
      text: "Layouts, material choices and 3D views give you a clear picture of the result before work starts.",
    },
    {
      title: "Quote and Approval",
      text: "You receive a clear quote and schedule, and we begin only after you approve them.",
    },
    {
      title: "Construction and Execution",
      text: "Our site team builds, installs and finishes the work to the approved plan, with quality checks at every stage.",
    },
    {
      title: "Handover and Support",
      text: "We complete final checks, fix small snags and walk you through your finished space.",
    },
  ],
  cta: "See what your space could look like with a top interior and construction company in Delhi NCR.",
}
export const journey = {
  title:
    "Construction and Interior Solutions for Every Stage of Your Property Journey",
  text: "A property project does not end when the walls go up. Our team supports you at every stage, from the first plan to long-term upkeep.",
  stages: [
    {
      title: "Planning",
      text: "Before you build, our architects help you understand your plot, layout options and budget. Hire our architects in Delhi today!",
      image: images.siteBlueprints,
    },
    {
      title: "Design",
      text: "Our designers create floor plans, elevations and 3D interior views so you can approve the look before work starts.",
      image: images.homeInterior,
    },
    {
      title: "Construction",
      text: "Our building contractors in Delhi handle structure, masonry, finishing and site supervision for homes and commercial buildings.",
      image: images.houseBalconies,
    },
    {
      title: "Interiors",
      text: "From modular kitchens and wardrobes to false ceilings and lighting, our turnkey interior team finishes the space so you can move in.",
      image: images.livingRoom,
    },
    {
      title: "Renovation and Upgrade",
      text: "As your needs change, we help you renovate, add floors, extend outdoor areas or add a tensile canopy or parking shade. Let's keep your property in top shape!",
      image: images.tensileRoofs,
    },
  ],
  cta: "Ready to start your project? Let's talk.",
}
export const reliable = {
  title:
    "Why Skyrise Is a Reliable Construction and Interior Design Partner in Delhi NCR",
  text: "Our Delhi-based company combines construction knowledge, design skill and tensile structure expertise, backed by a large team of skilled professionals. Here is what sets us apart:",
  items: [
    {
      big: "900+",
      title: "Projects Delivered",
      text: "Our work spans houses, offices, shops, farmhouses and outdoor structures. That experience helps us suggest the right solution for your space and budget.",
    },
    {
      big: "50+",
      title: "Experts",
      text: "Our team covers architecture, civil engineering, interior design, carpentry, fabrication and site supervision, so the whole project stays in-house.",
    },
    {
      big: "25+",
      title: "Years of Experience",
      text: "We have been building since 1998. Experience teaches you what works in Delhi's heat, rain and dust, and where shortcuts cause problems later.",
    },
    {
      big: "10+",
      title: "Cities Covered",
      text: "We serve Delhi, Noida, Greater Noida, Gurgaon, Ghaziabad and Faridabad, along with other cities across north India.",
    },
    {
      big: "Delhi",
      title: "Registered in Delhi",
      text: "With our registered base in Delhi, our site teams reach your location quickly, source materials locally and respond fast when you need us.",
    },
  ],
  cta: "Connect with our construction and interior experts today!",
}
export const spaces = {
  title:
    "Construction, Interior and Tensile Structure Services for Every Space in Delhi NCR",
  text: "Every space has its own needs, budget and rules. Skyrise creates solutions that fit how each space is used.",
  items: [
    [
      "Homes and Villas",
      "We build and furnish independent houses, kothis and villas with practical layouts and quality finishes. Hire a trusted home construction company in Delhi!",
    ],
    [
      "Apartments and Builder Floors",
      "Our turnkey interiors and renovation services make apartments and builder floors comfortable, modern and easy to maintain.",
    ],
    [
      "Offices and Corporate Spaces",
      "We design and build offices that support productivity, with efficient layouts and a professional look that reflects your brand.",
    ],
    [
      "Retail Stores and Showrooms",
      "We create attractive shop interiors and showrooms that draw customers in and display your products well.",
    ],
    [
      "Restaurants and Cafes",
      "From kitchens to seating, we plan restaurant and cafe interiors, including container cafes and outdoor tensile shade areas.",
    ],
    [
      "Hotels and Resorts",
      "We build and furnish guest rooms, lobbies and outdoor areas, and add tensile canopies, gazebos and pool-side shade.",
    ],
    [
      "Farmhouses",
      "Our prefabricated and container farmhouses are quick to build, comfortable and suited to weekend homes and farm stays.",
    ],
    [
      "Schools and Institutes",
      "We build and furnish classrooms, labs and play areas, and add tensile roofs for assembly and sports spaces.",
    ],
    [
      "Hospitals and Clinics",
      "We design clean, functional clinic and hospital interiors that support patient comfort and smooth daily operations.",
    ],
    [
      "Gyms, Salons and Studios",
      "We plan and fit out gyms, salons and studios with practical layouts, good lighting and durable finishes.",
    ],
    [
      "Parking Areas",
      "Our tensile car parking structures protect vehicles from sun and rain in societies, offices, malls and showrooms.",
    ],
    [
      "Warehouses and Industrial Sites",
      "We build site offices, labour accommodation and shelters using prefabricated structures that go up quickly.",
    ],
    [
      "Lawns, Banquets and Event Spaces",
      "Tensile canopies and gazebos add shade and style to lawns, banquet halls and wedding venues.",
    ],
    [
      "Terraces and Swimming Pools",
      "We add tensile shades and umbrella structures to terraces, rooftops and pool areas so you can use them in all seasons.",
    ],
  ],
}
export const cta2 = {
  title: "Ready to build or redesign your space? Hire Skyrise today!",
  button: "Hire Skyrise today",
}
export const designBuild = {
  title: "Why Delhi NCR Property Owners Choose a Design and Build Company",
  text: "When one company handles design and construction, decisions are faster, costs are clearer and the result is more consistent. Here is why more property owners in Delhi NCR choose this route.",
  items: [
    {
      title: "One Point of Responsibility",
      text: "You deal with a single team for design, construction and finishing, so nobody can blame another vendor when something goes wrong.",
    },
    {
      title: "Faster Project Timelines",
      text: "Design and site work are planned together, so work begins earlier and runs without waiting for approvals from several vendors.",
    },
    {
      title: "Better Budget Control",
      text: "One scope and one quote make it easier to track spending and avoid last-minute extras.",
    },
    {
      title: "Consistent Design Quality",
      text: "The same team plans the structure, interiors and outdoor areas, so everything matches in style and function.",
    },
    {
      title: "Built for Delhi's Weather",
      text: "Delhi has hot summers, heavy monsoon rain and cold winters. We choose materials, insulation and fabrics that cope with all three.",
    },
    {
      title: "Sustainable Choices",
      text: "From container homes and prefab houses to eco-friendly materials, we offer options that reduce waste and cost.",
    },
  ],
  statement: {
    title: "Good Design Needs Solid Construction",
    paragraphs: [
      "A beautiful interior is not enough if the walls leak. A strong structure is not enough if the space does not suit the people using it. And a tensile canopy needs good engineering behind it, or it will not last through a Delhi monsoon.",
      "That is why Skyrise combines design with construction. Our team takes your idea through planning, 3D design, material selection, construction, finishing and final quality checks. We build spaces that look good and last.",
    ],
    closing:
      "Talk to Skyrise about your next construction, interior or tensile structure project in Delhi NCR. Hire us today!",
  },
}

export const contactInfo = {
  phones: [
    { label: "+91-9312-1488-49", href: "tel:+919312148849" },
    { label: "+91-7291-9943-55", href: "tel:+917291994355" },
  ],
  email: "skyrise30@gmail.com",
  address: "C 373 Ground Floor DDA Flats jasola vihar Sarita Vihar , New Delhi 110025",
}
