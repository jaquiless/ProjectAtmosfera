package springjdbcdemosections.DAO;

import java.util.List;

import springjdbcdemosections.model.Section;

public interface SectionDAO {

	int save(Section section);
	
	int update(Section section, int id);
	
	int delete(int id);
	
	List<Section> getAll();
	
	Section getById(int id);
}

