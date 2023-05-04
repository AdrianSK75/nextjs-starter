'use client'
import { useState, FormEvent, Dispatch, SetStateAction } from "react";

interface ItemsProps {
    setItems: Dispatch<SetStateAction<string[]>>;
}

export function ItemList(): JSX.Element {
    const [items, setItems] = useState<string[]>([]);

    const itemsList = items.map((item, index) => <li key={index}>{item}</li>)

    return (
      <div>
        <AddItem setItems={setItems} />
        <ul>{itemsList}</ul>
      </div>
    )
}

function AddItem({ setItems }: ItemsProps): JSX.Element {
    const [item, setItem] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        
        setItems((prevItems: string[]) => ([...prevItems, item]))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e => setItem(e.target.value)} className="border-4" />
            <input type="submit" className="border-4" />
        </form>
    );
}
  