import { useId } from "react";

type CollapsibleProps = {
  label: string;
  title?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function Collapsible({
  label,
  title,
  children,
  defaultOpen = false,
}: CollapsibleProps) {
  const id = useId();

  return (
    <div className="collapsible">
      <input type="checkbox" id={id} defaultChecked={defaultOpen} />
      <label htmlFor={id}>{label}</label>

      <div className="collapsible-text">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </div>
  );
}


// type Props = {
//   content: string;
// };

// export default function Collapsible() {
//     return (
//         <div className="wrapper">
//             <div className="collapsible">
//                 <input type="checkbox" id="collapsible-head" />
//                 <label htmlFor="collapsible-head"> Collapsible Using only HTML</label>
//                 <div className="collapsible-text">
//                     <h2>Collapsible text</h2>
//                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsum quod vero molestias. Quaerat ipsum rerum aspernatur, ad quasi fugit excepturi qui amet minus dicta. Similique esse blanditiis neque suscipit?
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }
