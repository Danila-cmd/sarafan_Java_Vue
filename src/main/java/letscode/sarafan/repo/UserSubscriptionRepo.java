package letscode.sarafan.repo;

import letscode.sarafan.domain.User;
import letscode.sarafan.domain.UserSubscriptionId;
import letscode.sarafan.domain.UserSubscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserSubscriptionRepo extends JpaRepository<UserSubscription, UserSubscriptionId> {
    List<UserSubscription> findBySubscriber(User user);

}
