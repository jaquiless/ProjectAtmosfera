package springjdbcdemosections.model;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Section {

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	private int id;
	
	private String name;
	
	private String description;
	
	
}
