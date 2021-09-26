import { useState, useEffect } from "react"
import { ModelOfTableNotification } from "@src/database/Model"
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from "react-redux";
import { updateNotificationBadge } from "@src/store/modules/PageControl/actions";
import {formatDistanceToNow} from 'date-fns';
import { ptBR } from "date-fns/locale";
import { GlobalState } from "@src/store/Model";

export const useNotificationListController = () => {
  const pageControl = useSelector((state:GlobalState) => state.pageControl);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<ModelOfTableNotification[]>([]);

  useEffect(
    () => {
      const loadData = async () => {
        const collectionNotification = firestore().collection('Notification');

        const responseDatabase: FirebaseFirestoreTypes.QuerySnapshot = await collectionNotification
          .get();

        const notificationOfDatabase: ModelOfTableNotification[] = [];
        responseDatabase.docs.forEach(doc => {
          const birth_date = doc.data().birth_date.toDate();
          const create_at = doc.data().create_at.toDate();
          const created_distance = formatDistanceToNow(create_at,{locale: ptBR,includeSeconds:true,addSuffix:true});
          const update_at = doc.data().update_at.toDate();
          const itemOfDatabase: ModelOfTableNotification = doc.data() as ModelOfTableNotification
          notificationOfDatabase.push({
            ...itemOfDatabase,
            birth_date,
            create_at,
            update_at,
            created_distance,
          });
        });
        setNotifications(notificationOfDatabase);
        dispatch(updateNotificationBadge({notificationBadge: notificationOfDatabase.length}))
        setLoading(false);
      };
      loadData();
    },[pageControl.reloadNotificationList]
  )


  return {
    getController:{loading, notifications},
  }
}
