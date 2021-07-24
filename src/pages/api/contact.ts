import { query as q } from "faunadb";

import { fauna } from "../../services/fauna";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  const { name } = req.body;
  console.log({ data: { name } });
}
