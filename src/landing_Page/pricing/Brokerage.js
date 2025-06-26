// TableNavigator.js
import React, { useState } from 'react';
import './TableNavigator.css';

function Brokerage() {
  const [activeTable, setActiveTable] = useState('table1');

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <button onClick={() => setActiveTable('table1')}>Table 1</button>
        <button onClick={() => setActiveTable('table2')}>Table 2</button>
        <button onClick={() => setActiveTable('table3')}>Table 3</button>
      </nav>

      {/* Conditional Table Rendering */}
      {activeTable === 'table1' && (
        <section className="table-section">
          <h2>Table 1</h2>
          <table>
            <thead>
              <tr><th>Col A</th><th>Col B</th></tr>
            </thead>
            <tbody>
              <tr><td>Row 1</td><td>Data</td></tr>
            </tbody>
          </table>
        </section>
      )}

      {activeTable === 'table2' && (
        <section className="table-section">
          <h2>Table 2</h2>
          <table>
            <thead>
              <tr><th>Header 1</th><th>Header 2</th></tr>
            </thead>
            <tbody>
              <tr><td>Data X</td><td>Data Y</td></tr>
            </tbody>
          </table>
        </section>
      )}

      {activeTable === 'table3' && (
        <section className="table-section">
          <h2>Table 3</h2>
          <table>
            <thead>
              <tr><th>Alpha</th><th>Beta</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>2</td></tr>
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}

export default Brokerage;

