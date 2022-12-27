package springjdbcdemosections.DAO;


import java.util.List;

import springjdbcdemosections.model.Media;

public interface MediaDAO {
	
	int save(Media media);

	int update(Media media, int id);

	int delete(int id);

	List<Media> getAll();

	Media getById(int id);

}
