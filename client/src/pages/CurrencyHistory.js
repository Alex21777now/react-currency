import { useEffect, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function CurrencyHistory() {
  const [currency, setCurrency] = useState("USD");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      let today = new Date();
      let data = [];
      for (let i = 0; i < 10; i++) {   // последние 10 дней
        let d = new Date(today);
        d.setDate(today.getDate() - i);
        let dateStr = d.toISOString().split("T")[0].replace(/-/g, "");
        let res = await fetch(
          `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${dateStr}&json`
        );
        let json = await res.json();
        if (json[0]) data.push(json[0]);
      }
      setHistory(data.reverse());
    };
    fetchHistory();
  }, [currency]);

  return (
    <Container className="mt-4">
      <h2>История курса {currency}</h2>
      <Form.Select value={currency} onChange={e => setCurrency(e.target.value)}>
        <option value="USD">USD — Доллар</option>
        <option value="EUR">EUR — Евро</option>
        <option value="GBP">GBP — Фунт</option>
        <option value="PLN">PLN — Злотый</option>
        <option value="CAD">CAD — Канадський долар</option>
      </Form.Select>

      <LineChart width={800} height={400} data={history} className="mt-4">
        <Line type="monotone" dataKey="rate" stroke="#007bff" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="exchangedate" />
        <YAxis />
        <Tooltip />
      </LineChart>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Курс</th>
          </tr>
        </thead>
        <tbody>
          {history.map((h, i) => (
            <tr key={i}>
              <td>{h.exchangedate}</td>
              <td>{h.rate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
