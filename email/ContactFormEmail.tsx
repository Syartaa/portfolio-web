import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Hr,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import moment from "moment";

type ContactFormEmailProps = {
  email: string;
  text: string;
}

const ContactFormEmail = ( {email, text}: ContactFormEmailProps ) => {
    const date = moment().format("L, hh:mm A");

  return (
    <Html>
        <Head />
        <Preview>From: {email}</Preview>

        <Tailwind>
            <Body>
                <Container>
                    <Section className="borderBlack py-4 px-10 my-10 rounded-md bg-white ">
                        <Heading className="leading-tight">
                            You received the following message from <span className="italic">{email}</span>
                        </Heading>

                        <Text className="text-sm break-all">
                            {text}
                        </Text>

                        <Hr />

                        <Text className="text-sm">
                            <span className="font-semibold">Date:</span> {date} <br />
                            <span className="font-semibold">Contact:</span> {email}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  );
}
export default ContactFormEmail;