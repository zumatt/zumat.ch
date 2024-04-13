import './ProjectList.css';

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function ProjectList({ data }) {
  return (
    <div className="home">
      {Object.entries(data).map(([title, details], index) => (
        <div key={index}>
          <div className="listItem">
            <h2 className="itemTitle">{title}</h2>
            <p className="itemDate">{details.itemDate}</p>
            <p className="itemCategory">{details.itemCategory}</p>
            <a className="itemLink" href={`/${slugify(title)}`}>more +</a>
          </div>
          <p className="itemsDivider">–––</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;