import { PageInfo } from "../typing";

export const fetchPageInfo = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  const data = await response.json();
  const pageInfo: PageInfo[] = data.pageInfo;

  console.log(pageInfo);

  return pageInfo;
};
