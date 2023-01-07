import { IArticle } from "@Models/article";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import ArticleService from "services/article";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Text
} from '@chakra-ui/react';
import Link from "next/link";

const ListArticlesAdmin: NextPage = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const res = await ArticleService.getAllArticles({});

    if (res.docs && res.docs.length > 0) {
      setArticles(res.docs);
    }
  }

  return <TableContainer mx={8} mt={4}>
    <Table variant="simple" size="sm">
      <Thead>
        <Tr>
          <Th>
            Title
          </Th>
          <Th>
            Published Time
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {articles.length > 0 ? articles.map(article => <Tr>
          <Td>
            <Link href={`/admin/writing/${article._id}`}>{article.title}</Link>
          </Td>
          <Td>
            {article.createdAt}
          </Td>
        </Tr>) : <Tr>
          <Td>
            <Text>No Articles Found</Text>
          </Td>
        </Tr>}
      </Tbody>
    </Table>
  </TableContainer>
};

export default ListArticlesAdmin;