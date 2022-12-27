package springjdbcdemosections.model;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Sections_has_medias {

	private int id;
	
	private int Sections_id;
	
	private int Medias_Id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSections_id() {
		return Sections_id;
	}

	public void setSections_id(int sections_id) {
		Sections_id = sections_id;
	}

	public int getMedias_Id() {
		return Medias_Id;
	}

	public void setMedias_Id(int medias_Id) {
		Medias_Id = medias_Id;
	}
	
}
