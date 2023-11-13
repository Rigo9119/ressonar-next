import React from "react";

const PackItemCard = () => {
    return (
        <div className="flex flex-col w-80">
            <img src="" alt="card img" />
            <h4 className="text-white uppercase">Card title</h4>
            <p>
                Card description. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perferendis tempora temporibus commodi
                repellat officia fuga sequi.
            </p>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </div>
    );
};

export default PackItemCard;
