package springjdbcdemosections.DAO;

import java.util.List;

import springjdbcdemosections.model.Sections_has_medias;

public interface Sections_has_mediasDAO {

	int save(Sections_has_medias sections_has_medias);
	
	int update(Sections_has_medias sections_has_medias, int id);
	
	int delete(int id);
	
	List<Sections_has_medias> getAll();
	
	Sections_has_medias getById(int id);
	
}

