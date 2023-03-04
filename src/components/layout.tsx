import { Container } from "react-bootstrap";
import styles from "./layout.module.css";

export default function FormLayout({ children }: any) {
    return (<Container
    fluid
    className={`d-flex justify-content-center align-items-center my-auto ${styles.bigContainer}`}
  >
    <Container
      fluid
      className={`${styles.contentContainer} shadow border border-top-0 m-lg-4 m-3 p-4`}
    >
      {children}
    </Container>
  </Container>)
}