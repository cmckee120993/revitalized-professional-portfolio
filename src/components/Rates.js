import React from 'react';
import '../styles/Rates.css';

function Rates() {
    return (
        <>
            <h2>Web Developer Rates</h2>
            <p>While these rates are based on industry standards, all rates are up for negotiation and can be adjusted based on desired project, timeline, and budget.
                You are not required to keep me on as a retainer; however, sites can sometimes run into problems and hosting can be complicated. Keeping me on retainer
                means that I'm responsible for site maintenance and hosting for a specified amount of hours each month.
            </p>
            <table>
                <tr>
                    <th>Project</th>
                    <th>Type of Payment</th>
                    <th>Rate</th>
                    <th>Options</th>
                </tr>
                <tr>
                    <td>WordPress, Wix, or similar website</td>
                    <td>Hourly Price</td>
                    <td>€20,00 to €25,00/hour</td>
                    <td>Single/multiple pages; shopping cart and payment; contact; Search Engine Optimization; accessibility; etc.</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Project Price</td>
                    <td>€500,00 to €750,00</td>
                    <td>Single/multiple pages; shopping cart and payment; contact; Search Engine Optimization; accessibility; etc.</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Retainer</td>
                    <td>€20,00 to €50,00/month; additional rates may apply </td>
                    <td>€20,00/month guarantees one hour of site checking/upkeep; €50.00 guarantees three hours;
                        Additional fees may apply if retainer amount is passed (discussed in retainer contract).
                    </td>
                </tr>

                <tr>
                    <td>HTML, CSS, JavaScript Personalized Coded Site (Primarily Front End)</td>
                    <td>Hourly Price</td>
                    <td>€25,00 to €50,00/hour</td>
                    <td>Single/multi-page sites; flexible design; APIs; contact; Search Engine Optimization; accessibility; etc.</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Project Price</td>
                    <td>€500,00 to €1 000,00</td>
                    <td>Single/multi-page sites; flexible design; APIs; contact; Search Engine Optimization; accessibility; etc.</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Retainer</td>
                    <td>€30,00 to €75,00/month; additional rates may apply </td>
                    <td>€30,00/month guarantees one hour of site checking/upkeep as well as site hosting; €75,00 guarantees three hours in addition to site hosting; 
                        Additional fees may apply if retainer amount is passed (discussed in retainer contract).
                    </td>
                </tr>

                <tr>
                    <td>Fullstack Web Project with MongoDB/Database, Express, React/Angular, Node</td>
                    <td>Hourly Price</td>
                    <td>€25,00 to €50,00/hour</td>
                    <td>Single-page with multiple navigational opportunities; flexible design; APIs; contact; Search Engine Optimization; accessibility; Progressive Web Apps; etc.</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Project Price</td>
                    <td>€800,00 to €1 250,00</td>
                    <td>Creation of database; flexible design; APIs; Progressive Web App; Search Engine Optimization; accessibility; Progressive Web Apps;etc.</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Retainer</td>
                    <td>€30,00 to €100,00/month; additional rates may apply </td>
                    <td>€30,00/month guarantees one hour of site checking/upkeep as well as site hosting; €75,00 guarantees three hours in addition to site hosting; 
                        Rates up to €100,00 per month may be charged for database and user management;
                        Additional fees may apply if retainer amount is passed (discussed in retainer contract).
                    </td>
                </tr>
            </table>

            <h2>Bundle Options</h2>
            <p>As you can see in the other parts of my site, I am also a writer, translator, editor, and markerter. Take a look at these bundled offers 
                to save some money at this one-stop shop!
            </p>
        </>
    )
};

export default Rates;