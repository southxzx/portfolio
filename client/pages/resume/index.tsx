import { GetStaticProps, NextPage } from "next";
import GeneralServices from "services/general";
import { IResume } from "@Models/general";
import isEmpty from "lodash/isEmpty";
import { Box, SimpleGrid, Heading, Divider, Image, Flex, Text, Link } from "@chakra-ui/react"

import styles from "./styles.module.scss";
import { rawHtml } from "helpers/utils/common";
import mapSocialIcon from "./mapSocialIcon";
import Dot from "@Components/dot";

interface AboutPageProps {
  data: IResume
}
const AboutPage: NextPage<AboutPageProps> = ({ data }) => {

  const { about, work_exp, contact, education, skills, languages } = data;

  if (!data || isEmpty(data)) {
    return <h1>Sorry, this page was expired.</h1>;
  }

  return <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.profileTitleWrapper}>
        <Box className={styles.profileName}>
          <Heading as='h1' size='lg' noOfLines={1}>{about.name}</Heading>
          <Text fontSize="xl">{about.other_name}</Text>
        </Box>

        <img className={styles.profilePicture} src={about.profile_picture} width={80} height={80} alt={about.name} />
      </div>

      <div className={styles.profileSocialWrapper}>
        <SimpleGrid columns={{ lg: 2 }}>
          {Object.entries(contact).map((e) => {
            return <Flex key={e[0]} pb={2} alignItems="center">
              {mapSocialIcon(e[0])}
              <Text as="span" color="gray.700" fontSize={12} textTransform="uppercase" mb={0} pl={2} pr={1}>{e[0]}: </Text>
              {e[1].link
                ? <Link href={e[1].link || ""} isExternal mb={0} color="blue.500">{e[1].username || ""}</Link>
                : <Text color="gray.700">{e[1].username || ""}</Text>
              }
            </Flex>;
          })}
        </SimpleGrid>
      </div>
    </div>

    <Divider height={2} my={4} color="blackAlpha.400" />

    {/* ----------------------- WORK EXP ------------------------- */}
    <Box>
      <Heading as="h2" size="md">{work_exp.title}</Heading>
      <Box mt={5} ml={2}>
        {
          work_exp.content.map(work_exp_item => <Box key={work_exp_item.company} mb={2}>
            <Flex alignItems="center" w="full">
              {work_exp_item.company_logo
                ? <Image src={work_exp_item.company_logo} width={7} mr={2} />
                : <Box className={styles.logoCompanyPlaceholder} mr={2} />
              }
              <Flex justify="space-between" alignItems="center" w="full">
                <Heading as="h3" size="sm">{work_exp_item.company}</Heading>
                <Flex alignItems="center">
                  <Text>&#40; {work_exp_item.time}</Text>
                  <Dot size={2} />
                  <Text>{work_exp_item.location} &#41;</Text>
                </Flex>
              </Flex>
            </Flex>

            <Box p={2}>
              {work_exp_item.content.map((work_exp_item_content, i) => <Box key={i} pt={2}>
                <Text color="orange.400" fontSize="md" fontWeight="bold">{work_exp_item_content.title}</Text>
                <Box className={styles.blockExpContent}>
                  {
                    work_exp_item_content.content_html.map(html => rawHtml(html))
                  }
                </Box>
              </Box>)}
            </Box>
          </Box>)
        }
      </Box>
    </Box>

    <Divider height={2} my={4} color="gray.300" />

    {/* ----------------------- SKILLS ------------------------- */}
    <SimpleGrid columns={{ lg: 2 }}>
      <Box>
        <Heading as="h2" size="md">{skills.title}</Heading>
        <Box mr="20">
          {
            skills.content_html.map(html => rawHtml(html))
          }
        </Box>
      </Box>

      <Box>
        <Heading as="h2" size="md">{languages.title}</Heading>
        <Box mr="20">
          {
            languages.content.map(content => <Text key={content}>{content}</Text>)
          }
        </Box>
      </Box>
    </SimpleGrid>

    <Divider my={4} color="gray.300" />

    <Box>
      <Heading as="h2" size="md">{education.title}</Heading>
      <Box mr="20">
        {
          education.content.map(edu_item => <Box key={edu_item.title}>
            <Text color="orange.400" fontSize="md" fontWeight="bold">{edu_item.title}</Text>
            <Text>{edu_item.subtitle}</Text>
          </Box>)
        }
      </Box>
    </Box>
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