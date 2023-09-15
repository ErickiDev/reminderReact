import { Container } from "./styles";
import heroImage from "../../Assets/images/Hero.jpg";

export function Hero() {
  return (
    <Container>
      <img src={heroImage} alt="" />
    </Container>
  );
}
