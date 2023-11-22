
const Card = ({img, precio, descripcion}) => {
    return (
        <div>
            <div className="">
                <div className="card ">
                    <img src={img} className="" />
                    <div className=" d-flex justify-content-center card-body">
                        <p className="card-text text-center"><b>{descripcion}</b></p>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <small className="card-text">$ {precio}</small>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;