import { NavLink } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-text">
          <h3>E-Plantation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui
            nostrum quia aperiam aliquid impedit necessitatibus sunt ipsam
            consectetur veritatis quibusdam ut delectus, quis aut? Delectus rem
            fugit optio quis necessitatibus dolorum voluptas earum, facilis,
            eaque sed adipisci officia sit ea assumenda? Omnis non ex nemo
            adipisci ullam minima dolorem atque soluta, quasi quidem voluptate
            eligendi odit magnam. Perspiciatis eius ex illo expedita repudiandae
            quasi modi qui quas quaerat exercitationem ipsam iusto, sit
            veritatis possimus similique dolor, doloribus magni distinctio.
          </p>
          <button>
            <NavLink to="/product" className="link">
              Explore
            </NavLink>
          </button>
        </div>

        <div className="home-para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            aliquam laborum laudantium rem tempore, commodi voluptatem
            consequatur consequuntur. Aspernatur hic et necessitatibus accusamus
            libero placeat natus ab illo sit quo dolor non voluptatibus commodi
            nobis sed distinctio blanditiis dolorum expedita, vel ipsa sint,
            iste deserunt magnam! Quidem et nihil facere quisquam harum, itaque
            natus. Quidem dolores officiis numquam, odio impedit, error ipsa
            amet officia voluptatem inventore iure alias! Exercitationem
            explicabo laborum deleniti, quae atque dolorum eaque cumque
            similique assumenda blanditiis autem voluptatum aut dolor
            consequatur rem magni provident! Impedit doloribus ea molestiae
            aliquam voluptatum dolorum. Voluptate nemo libero doloribus quas
            adipisci tenetur doloremque similique provident aliquid obcaecati
            sit odit perspiciatis iste, corporis possimus voluptates cupiditate.
            Autem, non saepe unde porro beatae assumenda nisi debitis, rem
            ducimus laudantium reiciendis dolores? Dolores esse itaque
            recusandae laboriosam neque illum aliquam soluta accusantium,
            impedit ratione, veniam eos eum distinctio eligendi at ad. Harum
            molestias alias accusamus? Ipsum consequatur deleniti harum quas
            impedit. Fugiat fuga, eius repellendus necessitatibus suscipit unde
            nemo assumenda labore eveniet ut numquam quo debitis deserunt
            quibusdam nulla ratione officia iure et dolor consequatur ab dolores
            omnis corporis! Reiciendis corrupti officia iure tempore beatae
            consequuntur, explicabo eligendi id molestiae ipsum aut nesciunt
            inventore, hic consectetur. Accusantium deleniti molestiae est
            dolores quos deserunt debitis nihil in ipsam aut. Alias, nemo
            impedit. Omnis vel, animi nihil, consequatur nostrum nobis corrupti
            quo laborum nisi ut sed itaque temporibus illum aliquam sunt,
            voluptate natus alias. Porro harum ut illo vero eligendi hic sed,
            adipisci sint maxime.
          </p>
        </div>
      </div>
    </>
  );
}
