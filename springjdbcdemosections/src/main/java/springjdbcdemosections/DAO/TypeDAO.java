package springjdbcdemosections.DAO;

import java.util.List;

import springjdbcdemosections.model.Type;

public interface TypeDAO {

	int save(Type type);
	
	int update(Type type, int id);
	
	int delete(int id);
	
	List<Type> getAll();
	
	Type getById(int id);
}
