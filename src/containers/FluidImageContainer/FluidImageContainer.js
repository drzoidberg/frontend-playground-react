import React, { Component, Fragment } from 'react';

import FluidImage from '../../components/UI/FluidImage/FluidImage';

import classes from './FluidImageContainer.module.css';

import perrito01full from '../../img/FluidImageContainer/full/charles-deluvio-AQRp2NH-O8k_full.jpg';
import perrito02full from '../../img/FluidImageContainer/full/charles-deluvio-bYXP-ITv4_s_full.jpg';
import perrito03full from '../../img/FluidImageContainer/full/charles-deluvio-DziZIYOGAHc_full.jpg';
import perrito04full from '../../img/FluidImageContainer/full/charles-deluvio-K4mSJ7kc0As_full.jpg';
import perrito05full from '../../img/FluidImageContainer/full/toshi-K5pLGYJMHKk_full.jpg';
import perrito01thumb from '../../img/FluidImageContainer/thumb/charles-deluvio-AQRp2NH-O8k_thumb.jpg';
import perrito02thumb from '../../img/FluidImageContainer/thumb/charles-deluvio-bYXP-ITv4_s_thumb.jpg';
import perrito03thumb from '../../img/FluidImageContainer/thumb/charles-deluvio-DziZIYOGAHc_thumb.jpg';
import perrito04thumb from '../../img/FluidImageContainer/thumb/charles-deluvio-K4mSJ7kc0As_thumb.jpg';
import perrito05thumb from '../../img/FluidImageContainer/thumb/toshi-K5pLGYJMHKk_thumb.jpg';


class FluidImageContainer extends Component {
    state = {
        imgList: [
            { name: 'Aurelio de Frente', assetFull: perrito01full, assetThumb: perrito01thumb },
            { name: 'Aurelio con capucha', assetFull: perrito02full, assetThumb: perrito02thumb },
            { name: 'Aurelio con sueter de rayas', assetFull: perrito03full, assetThumb: perrito03thumb },
            { name: 'Aurelio con gorrito de perfil 1', assetFull: perrito04full, assetThumb: perrito04thumb },
            { name: 'Aurelio con gorrito de perfil 2', assetFull: perrito05full, assetThumb: perrito05thumb },
        ]
    }

    render() {
        return (
            <Fragment>
                <div className={classes.Gallery}>
                    {this.state.imgList.map((image, i) => {
                        return <FluidImage
                                    key={i}
                                    src={image.assetThumb}
                                    data-original={image.assetFull}
                                    alt={image.name}
                                    // title={image.name}
                                />
                    })}
                </div>
                <div className={classes.Modal}>

                </div>
            </Fragment>
        );
    }
}

export default FluidImageContainer;