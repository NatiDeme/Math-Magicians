import React from 'react';
import '../style/Nav.css';

const Home = () => (
  <div className="home-page">
    <h2>Welcome to our page!</h2>
    <p>
      Most pocket calculators do all their calculations in binary-coded decimal (BCD)
      rather than binary.
      BCD is common in electronic systems where a numeric value is to be displayed,
      especially in systems consisting solely of digital logic, and not containing a microprocessor.
      By employing BCD, the manipulation of numerical data for display can be
      greatly simplified by treating each digit as a separate single sub-circuit.
      This matches much more closely the physical reality of display hardware—a
      designer might choose to use a series of separate identical seven-segment
      displays to build a metering circuit, for example. If the numeric quantity
      were stored and manipulated as pure binary, interfacing to such a display
      would require complex circuitry.
    </p>
    <p>
      Therefore, in cases where the calculations are relatively
      simple, working throughout with BCD can lead to a simpler
      overall system than converting to and from binary.
      (For example, CDs keep the track number in BCD, limiting them to 99 tracks.)
    </p>
  </div>
);

export default Home;
