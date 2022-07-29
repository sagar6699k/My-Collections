import "./homepage.css";
import { CustomModal } from "../utils/CustomModal"
import { useState } from "react";

export const Homepage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      <h3>I'm homepage, You can call me Home</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fugit!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi explicabo temporibus nesciunt ea rem unde? Nam quos repellendus alias voluptas harum! Qui sequi laborum corporis esse tempore dolore ratione distinctio. Corrupti, ea? Enim, iste reiciendis error explicabo ipsum doloribus quae rem fugit magnam beatae maiores odio, voluptatem eos, quo alias velit molestiae eius quas neque? Deleniti laboriosam veritatis quibusdam tenetur eveniet recusandae quo totam eaque, possimus inventore aut? Voluptatem quasi optio quidem quas reiciendis! Voluptatibus possimus aliquam laborum, repellat quaerat animi dignissimos magnam, accusamus quam incidunt maxime. Delectus tenetur facilis laborum quae explicabo et voluptas impedit inventore fuga quo!
      </p>
    </div>
  )
}
