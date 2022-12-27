package springjdbcdemosections.model;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Type {

	private int id;
	
	private String element;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getElement() {
		return element;
	}

	public void setElement(String element) {
		this.element = element;
	}
	
}
