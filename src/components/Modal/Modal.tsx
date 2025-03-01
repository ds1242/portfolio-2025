interface ModelInfoProps {
    ModelInfo: {
        title: string;
        link: string;
        github: string;
        description: string;
        tools: string[];
        image: string,
    };
};


export default function Modal({ ModelInfo }: ModelInfoProps) {
    <div>
      <button onClick={openDialog}>Open Dialog</button>

      {/* Dialog element */}
      <dialog ref={dialogRef}>
        <h2>Dialog Title</h2>
        <p>This is a simple dialog in React.</p>
        <button onClick={closeDialog}>Close Dialog</button>
      </dialog>
    </div>
}