package springjdbcdemosections.model;

import java.util.List;

public class SectionMediaDTO {
	private String sectionName;
	private List<Media> media;
	public String getSectionName() {
		return sectionName;
	}
	public void setSectionName(String sectionName) {
		this.sectionName = sectionName;
	}
	public List<Media> getMedia() {
		return media;
	}
	public void setMedia(List<Media> media) {
		this.media = media;
	}
	@Override
	public String toString() {
		return "SectionMedia [sectionName=" + sectionName + ", media=" + media + "]";
	}
	public SectionMediaDTO(String sectionName, List<Media> media) {
		super();
		this.sectionName = sectionName;
		this.media = media;
	}
	public SectionMediaDTO() {
		super();
	}
}	
