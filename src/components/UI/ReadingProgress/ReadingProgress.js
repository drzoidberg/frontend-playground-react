import React from 'react';


import ReadingProgressBar from './ReadingProgressBar/ReadingProgressBar';

import classes from './ReadingProgress.module.css';
// import coolBg from './img/svg/cool-background.svg'

function ReadingProgress() {
    const target = React.createRef();
    return (
        <div className={classes.ReadingProgress} >
            <ReadingProgressBar target={target}/>
            <div className={classes.Post} ref={target}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reiciendis quia! Libero qui similique quos. Distinctio tenetur, numquam iure recusandae sequi, fugiat porro aperiam dolorem magnam fuga repellendus? Quia eos unde laboriosam.</p>
                <p>Voluptatum repudiandae repellat obcaecati sint aliquid harum explicabo. Saepe voluptas harum inventore assumenda sapiente. Aliquam facilis cumque pariatur ipsam id iure similique perferendis veritatis iste quas quidem inventore accusantium hic maxime, eveniet vel minima soluta ullam tenetur nisi, voluptas officiis culpa? Quos commodi ab est officia, quibusdam molestias vitae explicabo aperiam molestiae architecto iusto deserunt ratione fuga quam libero! Expedita magnam laudantium atque quia! Laudantium odit, ut nesciunt sunt earum, dignissimos nemo, culpa odio atque voluptatibus molestias perspiciatis aperiam quo quas facere itaque laboriosam! Laborum aperiam quas, assumenda nemo vitae fugit hic autem! Quia, quasi dolores iste nulla adipisci eos beatae possimus nihil iure illum tempora, rerum explicabo perspiciatis consectetur ratione nostrum. Nesciunt, sapiente dolorem dolore, quasi pariatur consequatur, accusantium voluptas quo quos commodi at a vitae praesentium distinctio. Molestiae maiores voluptatibus error deleniti vero repellat magni quos id officiis incidunt nemo commodi veritatis aut quae nam quis iusto architecto dolorem modi perspiciatis, corrupti, alias tempora vitae? Voluptatem soluta minus ea doloremque inventore eligendi id expedita qui natus quia magnam corporis saepe neque est officia pariatur alias assumenda sequi, tempora architecto vel ullam dicta incidunt. Quia eos unde laboriosam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reiciendis quia! Libero qui similique quos. Distinctio tenetur, numquam iure recusandae sequi, fugiat porro aperiam dolorem magnam fuga repellendus? Quia eos unde laboriosam.</p>
            </div>
        </div>
    );
}

export default ReadingProgress;
