export default function ArchiveLayout({ archive, latest }) { // "children" is replaced by parallel routes folders names
    return (
        <div>
            <h1>News Archive</h1>

            {/* Two separate routes are rendered in the same page */}
            <section id="archive-filter">{archive}</section>
            <section id="archive-latest">{latest}</section>
        </div>
    );
}