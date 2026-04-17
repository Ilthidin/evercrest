import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.webp'
import brand_img from './brand_img.webp'
import project_img_1 from './project_img_1.webp'
import project_img_2 from './project_img_2.webp'
import project_img_3 from './project_img_3.webp'
import project_img_4 from './project_img_4.webp'
import project_img_5 from './project_img_5.webp'
import project_img_6 from './project_img_6.webp'
import profile_img_1 from './profile_img_1.webp'
import profile_img_2 from './profile_img_2.webp'
import profile_img_3 from './profile_img_3.webp'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Skyline Haven",
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_2
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_3
    },
    {
      title: "Central Square",
      price: "$2,50,000",
      location: "Los Angeles",
      image: project_img_4
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_5
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "The entire process felt smooth and well-managed from start to finish. They provided clear guidance at every step and made sure I understood all my options before making a decision. I couldn’t have asked for a more reliable team."
    },
    {
        name: "Richard Nelson",
        title: "Model",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "I was impressed by how quickly they understood what I was looking for. Every recommendation matched my preferences, and the final property exceeded my expectations in both quality and location."
    },
    {
        name: "James Washington",
        title: "Composer",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "What stood out the most was their professionalism and transparency. There were no hidden surprises, and they stayed responsive throughout the entire process. It made a big difference in my confidence as a buyer."
    }
];