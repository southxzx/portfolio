import { GetStaticProps, NextPage } from "next";
import GeneralServices from "services/general";
import { IResume } from "@Models/general";
import isEmpty from "lodash/isEmpty";
import { Box, SimpleGrid, Heading, Divider, Image, Flex, Text } from "@chakra-ui/react"

import styles from "./styles.module.scss";
import { rawHtml } from "helpers/utils/common";

interface AboutPageProps {
  data: IResume
}
const AboutPage: NextPage<AboutPageProps> = ({ data }) => {

  const { about, work_exp, contact } = data;

  if (!data || isEmpty(data)) {
    return <h1>Sorry, this page was expired.</h1>;
  }

  return <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.profileTitleWrapper}>
        <div className={styles.profileName}>
          <Heading as='h1' size='lg' noOfLines={1}>{about.name}</Heading>
          <span>{about.other_name}</span>
        </div>

        <img className={styles.profilePicture} src={about.profile_picture} width={100} height={100} alt={about.name} />
      </div>

      <div className={styles.profileSocialWrapper}>
        <SimpleGrid columns={{ lg: 2 }}>
          {Object.entries(contact).map((e) => {
            return <div>
              <span>{e[0]}: </span>
              {e[1]}
            </div>;
          })}
        </SimpleGrid>
      </div>
    </div>
    <Divider height={2} color="blackAlpha.400" />
    <div className={styles.content}>
      <Box>
        <Heading as="h2">{work_exp.title}</Heading>
        <Box mr="20">
          {
            work_exp.content.map(work_exp_item => <Box>
              <Flex alignItems="center">
                <Image src={work_exp_item.company_logo} width={7} />
                <Heading as="h3" size="sm">{work_exp_item.company}</Heading>
              </Flex>

              <Text>{work_exp_item.subtitle}</Text>

              <Box p={2}>
                {work_exp_item.content.map(work_exp_item_content => <Box pb={4}>
                  <Text color="orange.400" fontSize="md" fontWeight="bold">{work_exp_item_content.title}</Text>
                  {
                    work_exp_item_content.content_html.map(html => rawHtml(html))
                  }
                </Box>)}
              </Box>
            </Box>)
          }
        </Box>
      </Box>

      <Divider height={2} color="gray.300" />

    </div>
  </div>
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const aboutData = await GeneralServices.getResume();

    return {
      props: {
        data: aboutData?.data || {}
      }
    }
  } catch (error) {
    return {
      props: {
        data: {}
      }
    }
  }
};

export default AboutPage;