'use client'

import styles from './page.module.css';
import '../globals.css';

export default function CompetitionPage() {
  return (
    <div className={styles.compContainer}>
        <div className={styles.compHeader}>
            BIKE DESIGN COMPETITION
        </div>
        <div className={styles.compRow}>
            <div className={styles.compBox}>
                <h2>About</h2>
                <p>THE BIKE DESIGN COMPETITION PRESENTS A REAL-LIFE SCENARIO REQUIRING BIKES TAILORED TO SPECIFIC NEEDS. THIS YEAR'S FOCUS IS ON STUDENTS FROM KENYA. PARTICIPANTS MUST MODIFY A DONATED BIKE WITHIN A $90 BUDGET AND SUBMIT PROPOSALS TO STUYBIKE2023@GMAIL.COM. PROPOSALS SHOULD INCLUDE SCREENSHOTS OF INTENDED PARTS, A RATIONALE FOR THE MODIFICATIONS, AND A DESCRIPTION OF SHIPPING AND ASSEMBLY. A COMMITTEE WILL SELECT THE TOP DESIGN, WHICH WILL BE CONSTRUCTED AT A BIKE FACTORY IN KENYA AND DONATED TO LOCAL KIDS.</p>
            </div>
            <div className={styles.compBox}>
                <h2>Purpose</h2>
                <p>KENYA IS ONE OF THE WORLD'S LARGEST IMPORTERS OF USED CARS, MANY OF WHICH WERE BANNED IN EUROPE FOR OVER-EMISSION AND "DUMPED" IN DEVELOPING COUNTRIES LIKE KENYA. LESS THAN 10% OF KENYANS OWN A CAR. BICYCLES ARE CHEAPER, EASIER TO STORE AND MAINTAIN, AND PRODUCE LOWER CARBON EMISSIONS. WE AIM TO DESIGN A BIKE SUITED TO THE LOCAL GEOGRAPHY AND INDIVIDUAL NEEDS, SUCH AS CARRYING CAPACITY AND EASE OF REPAIR. THIS WILL HELP IMPROVE THE LIVES OF ECONOMICALLY DISADVANTAGED STUDENTS IN KENYA THROUGH A HEALTHY, GREEN, AND SUSTAINABLE MEANS.</p>
            </div>
            <div className={styles.compBox}>
                <h2>Participant Description</h2>
                <p>PARTICIPATE ALONE OR WITH UP TO THREE OTHERS. REVIEW THE CASE SCENARIOS RELEASED ON JUNE 3. PROPOSE BIKE MODIFICATIONS AND SCREENSHOT PARTS (INCLUDING DELIVERY FEES) FROM RELIABLE ONLINE MARKETS OR BIKE FACTORIES. WRITE A ONE-PAGE, SINGLE-SPACED EXPLANATION OF YOUR DESIGN AND ASSEMBLY STEPS. THE BUDGET IS $50 MAX. SUBMIT TO STUYBIKE2023@GMAIL.COM BY August 1st!</p>
            </div>
            <div className={styles.compBox}>
                <h2>Public Description</h2>
                <p>THE 2024 STUYBIKE BIKE DESIGN COMPETITION WILL BE ACCEPTING SUBMISSIONS FROM JUNE 20th TO August the 1st! THIS YEAR, PARTICIPANTS ARE TASKED WITH DESIGNING BIKES FOR A GROUP OF STUDENTS FROM KENYA. PARTICIPANTS ARE ASKED TO RESEARCH AND MODIFY A DONATED BIKE TO SUIT THE STUDENT'S NEEDS UNDER A BUDGET OF $90 MAX. PARTICIPANTS CAN SUBMIT THEIR PROPOSALS TO OUR CLUB EMAIL (STUYBIKE2023@GMAIL.COM). THE WINNING DESIGN WILL BE SENT TO A BIKE FACTORY IN KENYA TO ACTUALLY BE CONSTRUCTED AND DONATED TO LOCAL KIDS AT A SCHOOL IN DESPERATE NEED OF BIKES.</p>
            </div>
        </div>
        <div className={styles.compCategory}>
            <h2>Kenya's Transportation Challenges</h2>
            <p>Kenya, like many other developing nations, faces difficulties in transportation infrastructure and availability. Existing bike designs do not fully address the needs and conditions of Kenyan users; thus we have decided to launch this competition to modify bikes specifically for our student peers in Kenya. From a global environmental perspective, kenya is home to a large second car market. Many of these used cars were banned in Europe for over-emission and "dumped" in developing countries like Kenya. Bicycles, on the other hand, are less expensive, easier to store and maintain and produce lower carbon emissions. However, bikes are seen as a scarcity in much of Kenya. Furthermore, the current economic crisis hinders the Kenyans. According to CEIC data, the minimum wage in Kenya is 2.71 dollars per hour, and the unemployment rate was 5.69% in 2023, after the economic recession and job cuts. Akoth.J from the local village expressed his desire for a bike. ‘If I had a bike I would not have to travel so far to go to school. Every morning I wake up before the birds and I have to walk two hours to go to school’. There is a need for cheaper and more durable bikes in Kenya as a mode of transportation, not only for ease of living, but also for practical efficiency. One reason why modifications are required to the everyday bike is because of the terrain and climate in Kenya. In the capital, Nairobi, bikers must overcome steep hills, uneven surfacing of roads and even muddy, bumpy lanes. Wanjiku.E (14) from the local school told us ‘the road back to home is bumpy. I cannot cycle and I have to push my bike and books up a steep hill’. Bikes must also be made of material that can withstand Kenya’s tropical climate, including periods of intense heat, heavy rain and humidity. Kadogo.R (15) said that her bike began to melt after being placed in the Kenyan Sun. ‘It was so scary! My handles were dripping and so hot to touch!’ Many teens need bikes not only for commuting - Mutunga.K (12) said ‘I have to carry back water and buy food from the market each day for my family.’ Many others have expressed their desire towards owning a bike, but still acknowledge the issues surrounding their bikes not addressing specific needs. Existing bikes in Kenya are often second-hand, and lack essential parts such as working brakes and strong handle-grips, as well as ergonomic equipment. This poses risks to riders, especially on rocky, uneven terrain which is prevalent in Kenya. Enhancing safety and comfort through innovative modifications is crucial to encouraging more people to use bikes.</p>
        </div>
    </div>
  );
}
