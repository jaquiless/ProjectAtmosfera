package springjdbcdemosections.model;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Media {

	private int id;

	private String description;

	private String urls;

	private int Types_id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrls() {
		return urls;
	}

	public void setUrls(String urls) {
		this.urls = urls;
	}

	public int getTypes_id() {
		return Types_id;
	}

	public void setTypes_id(int types_id) {
		Types_id = types_id;
	}

	@Override
	public String toString() {
		return "Media [id=" + id + ", description=" + description + ", urls=" + urls + ", Types_id=" + Types_id + "]";
	}
	
}
