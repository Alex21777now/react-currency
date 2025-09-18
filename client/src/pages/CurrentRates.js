import { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";

export default function CurrentRates() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then(res => res.json())
      .then(data => setRates(data));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Текущие курсы НБУ</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Код</th>
            <th>Валюта</th>
            <th>Сокр.</th>
            <th>Курс</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {rates.map(r => (
            <tr key={r.r030}>
              <td>{r.r030}</td>
              <td>{r.txt}</td>
              <td>{r.cc}</td>
              <td>{r.rate}</td>
              <td>{r.exchangedate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
