import React from "react";
import { VStack, Grid, Box, Text, HStack } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Title from "components/ui/Title";

const About: React.FC = () => {
  return (
    <Box paddingBlock="20">
      <Title title="About" subtitle="Know about us" centered />

      <VStack spacing={{ base: "24", md: "20" }}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="6"
        >
          <VStack
            alignItems="flex-start"
            order={{ base: 2, md: 1 }}
            spacing="5"
          >
            <Text fontSize="4xl" fontWeight="light" lineHeight="shorter">
              Lorem, ipsum dolor.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              repudiandae error quaerat inventore fugit eum iusto, neque ullam
              asperiores accusamus quasi, vel nobis. Distinctio, assumenda
              voluptatibus!
            </Text>
          </VStack>
          <Box order={{ base: 1, md: 2 }}>
            <StaticImage
              src="https://source.unsplash.com/-YHSwy6uqvk/640x480"
              alt=""
              layout="fullWidth"
            />
          </Box>
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="6"
        >
          <VStack
            alignItems="flex-start"
            order={{ base: 2, md: 2 }}
            spacing="5"
          >
            <Text fontSize="4xl" fontWeight="light" lineHeight="shorter">
              Lorem ipsum dolor sit amet.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              repudiandae error quaerat inventore fugit eum iusto, neque ullam
              asperiores accusamus quasi, vel nobis. Distinctio, assumenda
              voluptatibus! Veniam aliquid amet vel nemo quas error
              exercitationem? Possimus rerum id, corrupti quisquam doloremque
              quia adipisci odio architecto molestiae iure ratione saepe
              perferendis magni expedita sit nisi? Soluta tempora impedit
              dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Culpa sequi quibusdam neque dolorum saepe, tempora quam, deserunt,
              odit corporis ratione placeat ad eius quae! Rem autem inventore
              quam aliquid quod impedit ad vel in cumque, esse perferendis
              delectus nihil consequatur corporis magnam doloremque voluptatum
              ex? Laudantium explicabo provident cum, rerum ratione neque
              deleniti eum iure facere.
            </Text>
          </VStack>
          <Box order={{ base: 1, md: 1 }}>
            <StaticImage
              src="https://source.unsplash.com/4_jhDO54BYg/640x480"
              alt=""
              layout="fullWidth"
            />
          </Box>
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="6"
        >
          <VStack
            alignItems="flex-start"
            order={{ base: 2, md: 1 }}
            spacing="5"
          >
            <Text fontSize="4xl" fontWeight="light">
              Lorem ipsum dolor sit.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              repudiandae error quaerat inventore fugit eum iusto, neque ullam
              asperiores accusamus quasi, vel nobis. Distinctio, assumenda
              voluptatibus! Veniam aliquid amet vel nemo quas error
              exercitationem? Possimus rerum id, corrupti quisquam doloremque
              quia adipisci odio architecto molestiae iure ratione saepe
              perferendis magni expedita sit nisi? Soluta tempora impedit
              dolorem? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Enim asperiores ratione illum. Porro autem iste minus libero
              aliquid sint dolorem. Delectus, amet fugiat natus placeat unde
              sint beatae ab a ullam non, veritatis cumque neque quae
              praesentium, quos adipisci nisi molestiae. Quidem itaque velit
              commodi culpa similique omnis, minima ex quis corporis, eaque,
              voluptatum blanditiis.
            </Text>
          </VStack>
          <Box order={{ base: 1, md: 2 }}>
            <StaticImage
              src="https://source.unsplash.com/IGfIGP5ONV0/640x480"
              alt=""
              layout="fullWidth"
            />
          </Box>
        </Grid>

        <VStack spacing="8" alignItems="flex-start">
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            numquam tempora sit reprehenderit, ipsam voluptas. Illo laborum,
            consequuntur dolorem eum nam error aut reprehenderit ipsam commodi
            explicabo magnam accusantium at molestiae nesciunt esse omnis
            numquam maiores eos blanditiis, culpa, aspernatur qui. Fugiat
            officia eaque incidunt sed, voluptatum praesentium nostrum
            necessitatibus aspernatur nam veritatis vero iste, neque velit ipsa!
            Adipisci consequatur, deleniti voluptates sit ab asperiores nostrum
            molestiae eos a dignissimos cum, animi, soluta consectetur dolor
            velit voluptatibus dolorem laudantium doloribus delectus reiciendis
            quibusdam illo aspernatur quia. Esse, animi quasi accusantium
            veritatis quos ab et quae, nisi at perferendis consectetur. Ducimus
            quisquam deserunt explicabo? Optio quos perferendis laudantium vitae
            officiis accusantium delectus dolorum error itaque dolores, cumque,
            in, saepe quam fuga dolor numquam? Atque, aliquid beatae. Provident,
            laborum quidem! Velit magni voluptate natus corporis sed, deserunt
            voluptatibus sapiente facere, dolore soluta, nihil blanditiis ullam
            corrupti reiciendis eos ut nesciunt porro! Minus tempore,
            necessitatibus obcaecati, officia veritatis dolorum magni voluptatum
            rem cumque aperiam sint dolorem rerum quia magnam ipsam deserunt sit
            nesciunt, voluptate et animi? Natus excepturi fugit laudantium
            voluptatum iste. Voluptas itaque aut est, expedita possimus nam
            minima minus laborum molestias suscipit tempora vitae quis cumque,
            aliquid nulla vero iure adipisci?
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum
            est similique quidem. Dolore perspiciatis quos saepe numquam alias
            tempore doloribus neque suscipit explicabo facilis consequatur modi
            voluptatem qui dolorem velit, reiciendis, temporibus consectetur,
            sapiente doloremque officia quasi a impedit quod in! Alias
            distinctio harum quo labore, minima veniam temporibus.
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            enim quisquam? Ex omnis rerum, quam sed ab assumenda aspernatur
            impedit adipisci quaerat ad sit doloremque veritatis quis vero
            dolorem distinctio qui eveniet libero nobis alias excepturi!
            Reiciendis sit quis, cumque recusandae velit iure maiores voluptas
            numquam laboriosam optio quia consectetur voluptatem asperiores
            veniam omnis ea, eligendi laborum accusantium debitis corrupti
            molestiae sunt! Sequi reiciendis iste nesciunt cupiditate in earum
            soluta tenetur sint illum aliquam exercitationem expedita rerum,
            nemo dolores rem eaque inventore voluptatum cum voluptate dolore
            excepturi. Necessitatibus autem nesciunt obcaecati enim modi tenetur
            dolorum quasi nostrum ut at? Nemo!
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default About;
